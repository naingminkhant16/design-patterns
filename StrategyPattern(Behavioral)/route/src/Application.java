import concrete_strategies.BusRouteStrategy;
import concrete_strategies.CarRouteStrategy;
import concrete_strategies.WalkRouteStrategy;
import context.NavigationContex;

public class Application {
    public static void main(String[] args) {
        // Bus Route
        NavigationContex navigationContex = new NavigationContex(new BusRouteStrategy());
        navigationContex.calculateRoute("Start Point", "End Point");

        // Car Route
        navigationContex.setRouteStrategy(new CarRouteStrategy());
        navigationContex.calculateRoute("Start Point", "End Point");

        // Walk Route
        navigationContex.setRouteStrategy(new WalkRouteStrategy());
        navigationContex.calculateRoute("Start Point", "End Point");
    }
}
