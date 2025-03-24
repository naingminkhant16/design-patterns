public class Application {
    public static void main(String[] args) {
        HistoryList historyList = new HistoryList();
        Command forwardCommand = new ForwardCommand();
        Command backwardCommand = new BackwardCommand();
        Command leftCommand = new LeftCommand();
        Command rightCommand = new RightCommand();

        historyList.addCommand(forwardCommand);
        historyList.addCommand(rightCommand);
        historyList.addCommand(forwardCommand);
        historyList.addCommand(leftCommand);
        historyList.addCommand(backwardCommand);

        historyList.undo();
        historyList.redo();
        System.out.println("============================");
        historyList.replay();
    }
}
