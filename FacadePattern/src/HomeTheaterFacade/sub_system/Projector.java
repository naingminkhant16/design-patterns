package HomeTheaterFacade.sub_system;

public class Projector {
    public void on() {
        System.out.println("Projector is on");
    }

    public void setInput(DVDPlayer dvdPlayer) {
        System.out.println("Setting input to DVD Player");
    }

    public void display() {
        System.out.println("Projector is displaying");
    }

    public void off() {
        System.out.println("Project is off");
    }
}
