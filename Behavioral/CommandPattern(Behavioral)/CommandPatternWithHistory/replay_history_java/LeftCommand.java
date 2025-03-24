public class LeftCommand implements Command {

    @Override
    public void execute() {
        System.out.println("moving left");
    }

    @Override
    public void unExecute() {
        System.out.println("undo moving left");
    }
}
