package concrete_strategies;

import strategy.RouteStrategy;

public class WalkRouteStrategy implements RouteStrategy {
    @Override
    public void calculateRoute(String startPoint, String endPoint) {
        System.out.println("Calculating walk route from " + startPoint + " to " + endPoint);
    }
}
