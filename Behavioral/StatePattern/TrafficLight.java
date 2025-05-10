public class TrafficLight {
    private LightState currentState;

    public TrafficLight() {
        currentState = new RedLightState();
    }

    public void changeState() {
        currentState.changeLight(this);
    }

    public void setState(LightState state) {
        currentState = state;
    }

    public void process() {
        currentState.process();
    }

    public String getCurrentColor() {
        return currentState.getColor();
    }
}
