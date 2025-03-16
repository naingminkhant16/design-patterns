public class ForwardCommand implements Command {
    @Override
    public void execute() {
        System.out.println("moving forward");
    }

    @Override
    public void unExecute() {
        System.out.println("undo moving forward");
    }
}
