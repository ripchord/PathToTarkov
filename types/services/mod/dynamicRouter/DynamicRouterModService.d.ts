import { RouteAction } from "@spt/di/Router";
import { DependencyContainer } from "tsyringe";
export declare class DynamicRouterModService {
    private container;
    constructor(container: DependencyContainer);
    registerDynamicRouter(name: string, routes: RouteAction[], topLevelRoute: string): void;
}
