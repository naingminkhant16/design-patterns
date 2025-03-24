package house;

public class BrickHouseBuilder extends HouseBuilder {
    @Override
    void layFoundation() {
        System.out.println("Brick House: Laying Foundation");
    }

    @Override
    void buildRoof() {
        System.out.println("Brick House: Building roof");
    }

    @Override
    void buildWalls() {
        System.out.println("Brick House: Building walls");
    }

    @Override
    void installDoors() {
        System.out.println("Brick House: Install doors");
    }
}
