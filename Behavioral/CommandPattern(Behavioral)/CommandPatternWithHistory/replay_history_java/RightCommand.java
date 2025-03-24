public class RightCommand implements Command {

    @Override
    public void execute() {
        System.out.println("moving right");
    }

    @Override
    public void unExecute() {
        System.out.println("undo moving right");
    }
}
