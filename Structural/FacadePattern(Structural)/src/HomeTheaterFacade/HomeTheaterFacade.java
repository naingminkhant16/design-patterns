package HomeTheaterFacade;

import HomeTheaterFacade.sub_system.DVDPlayer;
import HomeTheaterFacade.sub_system.Projector;
import HomeTheaterFacade.sub_system.SoundSystem;

public class HomeTheaterFacade {
    private final DVDPlayer dvdPlayer;
    private final Projector projector;
    private final SoundSystem soundSystem;

    public HomeTheaterFacade(DVDPlayer dvdPlayer, Projector projector, SoundSystem soundSystem) {
        this.dvdPlayer = dvdPlayer;
        this.projector = projector;
        this.soundSystem = soundSystem;
    }

    public void watchMovie(String movie) {
        System.out.println("Get ready to watch a movie...");
        dvdPlayer.on();
        dvdPlayer.play(movie);
        projector.on();
        projector.setInput(dvdPlayer);
        projector.display();
        soundSystem.on();
        soundSystem.setVolume(20);
        soundSystem.surroundSound();
    }

    public void endMovie() {
        System.out.println("Shutting down the movie theater...");
        dvdPlayer.stop();
        dvdPlayer.off();
        projector.off();
        soundSystem.off();
    }
}
