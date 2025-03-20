package concrete_strategies;

import strategy.RouteStrategy;

public class CarRouteStrategy implements RouteStrategy {
    @Override
    public void calculateRoute(String startPoint, String endPoint) {
        System.out.println("Calculating car route from " + startPoint + " to " + endPoint);
    }
}
