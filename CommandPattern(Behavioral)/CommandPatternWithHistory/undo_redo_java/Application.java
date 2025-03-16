import java.util.Stack;

public class Application {
    public static void main(String[] args) {
        // Stack
        Stack<Integer> stack = new Stack<>();

        // Create History List
        HistoryList historyList = new HistoryList();

        Command pushCommand1 = new PushCommand(stack, 15);
        pushCommand1.execute();
        historyList.addCommand(pushCommand1);
        System.out.println(stack); // 15

        Command pushCommand2 = new PushCommand(stack, 16);
        pushCommand2.execute();
        historyList.addCommand(pushCommand2);
        System.out.println(stack); // 15 16

        Command popCommand = new PopCommand(stack);
        popCommand.execute();
        historyList.addCommand(popCommand);
        System.out.println(stack); // 15

        historyList.undo();
        System.out.println(stack); // 15 16

        historyList.redo(); // 15
        System.out.println(stack);

        historyList.undo(); // 15 16
        System.out.println(stack);
    }
}
