public class RedLightState implements LightState {
    @Override
    public void changeLight(TrafficLight trafficLight) {
        trafficLight.setState(new GreenLightState());
    }

    @Override
    public String getColor() {
        return "Red";
    }

    @Override
    public void process() {
        System.out.println("Stop");
    }
}
