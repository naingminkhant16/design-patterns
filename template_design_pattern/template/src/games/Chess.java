package games;

public class Chess extends Game {
    @Override
    void initialize() {
        System.out.println("Initializing the Chess game.");
    }

    @Override
    void start() {
        System.out.println("Starting the Chess game.");
    }

    @Override
    void end() {
        System.out.println("Ending the Chess game.");
    }
}
