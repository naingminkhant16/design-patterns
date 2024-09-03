package games;


public class Football extends Game {
    @Override
    void initialize() {
        System.out.println("Initializing the Football game.");
    }

    @Override
    void start() {
        System.out.println("Starting the Football game.");
    }

    @Override
    void end() {
        System.out.println("Ending the Football game.");
    }
}
