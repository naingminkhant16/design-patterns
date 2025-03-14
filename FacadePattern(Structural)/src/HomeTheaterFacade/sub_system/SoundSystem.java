package HomeTheaterFacade.sub_system;

public class SoundSystem {
    public void on() {
        System.out.println("Sound System is ON");
    }

    public void setVolume(int volume) {
        System.out.println("Setting volume to " + volume);
    }

    public void surroundSound() {
        System.out.println("Surround sound is ON");
    }

    public void off() {
        System.out.println("Sound System is OFF");
    }
}
