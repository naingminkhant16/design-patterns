package house;

// A class can have several template methods.
public abstract class HouseBuilder {
    // Steps
    abstract void layFoundation();

    abstract void buildRoof();

    abstract void buildWalls();

    abstract void installDoors();

    // step with default implementation, but still can be overridden if needed
    void installElectricity() {
        System.out.println("Installing Electricity");
    }

    // Template Method - cannot be overridden by subclasses
    public final void buildHouse() {
        layFoundation();
        buildWalls();
        buildRoof();
        installDoors();
        installElectricity();
    }
}
