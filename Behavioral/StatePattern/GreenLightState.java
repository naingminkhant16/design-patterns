public class GreenLightState implements LightState {
    @Override
    public void changeLight(TrafficLight trafficLight) {
        trafficLight.setState(new YellowLightState());
    }

    @Override
    public String getColor() {
        return "Green";
    }

    @Override
    public void process() {
        System.out.println("Go");
    }
}
