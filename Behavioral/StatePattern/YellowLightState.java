public class YellowLightState implements LightState {
    @Override
    public void changeLight(TrafficLight trafficLight) {
        trafficLight.setState(new RedLightState());
    }

    @Override
    public String getColor() {
        return "Yellow";
    }

    @Override
    public void process() {
        System.out.println("Slow Down");
    }
}
