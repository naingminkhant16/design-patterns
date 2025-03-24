package house;

public class WoodenHouseBuilder extends HouseBuilder {
    @Override
    void layFoundation() {
        System.out.println("Wooden House: Laying Foundation");
    }

    @Override
    void buildRoof() {
        System.out.println("Wooden House: Building Roof");
    }

    @Override
    void buildWalls() {
        System.out.println("Wooden House: Building Walls");
    }

    @Override
    void installDoors() {
        System.out.println("Wooden House: Installing Doors");
    }

    // override default step method
    @Override
    void installElectricity() {
        System.out.println("Wooden House: No Electricity");
    }
}
