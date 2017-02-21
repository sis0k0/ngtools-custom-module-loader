import {
    Injectable,
    Compiler,
    NgModuleFactory,
    NgModuleFactoryLoader
} from "@angular/core";

declare var System: any;
const SEPARATOR = "#";
const FACTORY_CLASS_SUFFIX = "NgFactory";
const FACTORY_PATH_SUFFIX = ".ngfactory";

@Injectable()
export class CustomModuleFactoryLoader implements NgModuleFactoryLoader {
    private offlineMode: boolean;

    constructor(private compiler: Compiler) {
        this.offlineMode = compiler instanceof Compiler;
    }

    load(path: string): Promise<NgModuleFactory<any>> {
        let {modulePath, exportName} = splitPath(path);

        if (this.offlineMode) {
            return this.loadFactory(modulePath, exportName);
        } else {
            return this.loadAndCompile(modulePath, exportName);
        }
    }

    private loadFactory(modulePath: string, exportName: string): Promise<NgModuleFactory<any>> {
        modulePath = factoryModulePath(modulePath);
        exportName = factoryExportName(exportName);

        return System.import(modulePath)
            .then((module: any) => module[exportName])
            .then((factory: any) => checkNotEmpty(factory, modulePath, exportName));
    }

    private loadAndCompile(modulePath: string, exportName: string): Promise<NgModuleFactory<any>> {
        return System.import(modulePath)
            .then((module: any) => module[exportName])
            .then((factory: any) => checkNotEmpty(factory, modulePath, exportName))
            .then((type: any) => this.compiler.compileModuleAsync(type));
 
    }
}

function splitPath(path: string): {modulePath: string, exportName: string} {
    let [modulePath, exportName] = path.split(SEPARATOR);

    if (typeof exportName === "undefined") {
        exportName = "default";
    }

    return {modulePath, exportName};
}

function factoryModulePath(modulePath) {
    return `${modulePath}${FACTORY_PATH_SUFFIX}`;
}

function factoryExportName(exportName) {
    return exportName === "default" ?
        exportName :
        `${exportName}${FACTORY_CLASS_SUFFIX}`;
}

function checkNotEmpty(value: any, modulePath: string, exportName: string): any {
    if (!value) {
        throw new Error(`Cannot find '${exportName}' in '${modulePath}'`);
    }

    return value;
}
