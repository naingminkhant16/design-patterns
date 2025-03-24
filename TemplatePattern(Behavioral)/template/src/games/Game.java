package games;

public abstract class Game {
    //steps
    abstract void initialize();

    abstract void start();

    abstract void end();

    // template method - template method cannot be override by subclasses
    public final void play() {
        initialize();

        start();

        end();
    }
}
