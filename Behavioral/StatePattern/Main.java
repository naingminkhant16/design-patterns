public class Main {
    public static void main(String[] args) {
        TrafficLight trafficLight = new TrafficLight();
        System.out.println("Initial");
        System.out.println(trafficLight.getCurrentColor());
        System.out.println("///////////////////");

        trafficLight.changeState();
        System.out.println(trafficLight.getCurrentColor());
        trafficLight.process();

        System.out.println("///////////////////");
        trafficLight.changeState();
        System.out.println(trafficLight.getCurrentColor());
        trafficLight.process();
        System.out.println("///////////////////");

        trafficLight.changeState();
        System.out.println(trafficLight.getCurrentColor());
        trafficLight.process();
    }
}
