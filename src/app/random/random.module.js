"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var random_routing_module_1 = require('./random-routing.module');
var random_component_1 = require('./random.component');
var RandomModule = (function () {
    function RandomModule() {
    }
    RandomModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                random_routing_module_1.RandomRoutingModule
            ],
            declarations: [random_component_1.RandomComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RandomModule);
    return RandomModule;
}());
exports.RandomModule = RandomModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJhbmRvbS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQ0FBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUM5RCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQVNyRDtJQUFBO0lBQTRCLENBQUM7SUFQN0I7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AscUJBQVk7Z0JBQ1osMkNBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLENBQUMsa0NBQWUsQ0FBQztTQUNoQyxDQUFDOztvQkFBQTtJQUMwQixtQkFBQztBQUFELENBQUMsQUFBN0IsSUFBNkI7QUFBaEIsb0JBQVksZUFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSYW5kb21Sb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9yYW5kb20tcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUmFuZG9tQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5kb20uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSYW5kb21Sb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1JhbmRvbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUmFuZG9tTW9kdWxlIHsgfVxuIl19