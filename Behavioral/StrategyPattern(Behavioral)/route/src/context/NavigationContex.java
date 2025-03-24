package context;

import strategy.RouteStrategy;

public class NavigationContex {
    private RouteStrategy routeStrategy;

    public NavigationContex(RouteStrategy routeStrategy) {
        this.routeStrategy = routeStrategy;
    }

    public void setRouteStrategy(RouteStrategy routeStrategy) {
        this.routeStrategy = routeStrategy;
    }

    public void calculateRoute(String startPoint, String endPoint) {
        this.routeStrategy.calculateRoute(startPoint, endPoint);
    }
}
