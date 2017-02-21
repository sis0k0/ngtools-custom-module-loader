"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var random_component_1 = require('./random.component');
var routes = [
    {
        path: '',
        component: random_component_1.RandomComponent,
    },
];
var RandomRoutingModule = (function () {
    function RandomRoutingModule() {
    }
    RandomRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], RandomRoutingModule);
    return RandomRoutingModule;
}());
exports.RandomRoutingModule = RandomRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFuZG9tLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFDdkQsaUNBQWdDLG9CQUFvQixDQUFDLENBQUE7QUFFckQsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxrQ0FBZTtLQUMzQjtDQUNGLENBQUM7QUFPRjtJQUFBO0lBQW1DLENBQUM7SUFMcEM7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1lBQ3ZCLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzs7MkJBQUE7SUFDaUMsMEJBQUM7QUFBRCxDQUFDLEFBQXBDLElBQW9DO0FBQXZCLDJCQUFtQixzQkFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJhbmRvbUNvbXBvbmVudCB9IGZyb20gJy4vcmFuZG9tLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBSYW5kb21Db21wb25lbnQsXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBSYW5kb21Sb3V0aW5nTW9kdWxlIHsgfVxuIl19