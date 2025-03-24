package HomeTheaterFacade;

import HomeTheaterFacade.sub_system.DVDPlayer;
import HomeTheaterFacade.sub_system.Projector;
import HomeTheaterFacade.sub_system.SoundSystem;

public class Main {
    public static void main(String[] args) {
        // Create subsystem components
        DVDPlayer dvdPlayer = new DVDPlayer();
        Projector projector = new Projector();
        SoundSystem soundSystem = new SoundSystem();

        // Create the facade
        HomeTheaterFacade homeTheaterFacade = new HomeTheaterFacade(dvdPlayer, projector, soundSystem);

        // Watch a movie using the Facade
        homeTheaterFacade.watchMovie("Avatar");

        // End the movie and shut down the system
        homeTheaterFacade.endMovie();
    }
}
