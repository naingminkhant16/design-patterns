package house;

public class GlassHouseBuilder extends HouseBuilder {
    @Override
    void layFoundation() {
        System.out.println("Glass House: Laying Foundation");
    }

    @Override
    void buildRoof() {
        System.out.println("Glass House: Building roof");
    }

    @Override
    void buildWalls() {
        System.out.println("Glass House: Building walls");
    }

    @Override
    void installDoors() {
        System.out.println("Glass House: Install doors");
    }
}
