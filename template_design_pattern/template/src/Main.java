import games.Chess;
import games.Football;
import games.Game;
import networks.Facebook;
import networks.Network;
import networks.Twitter;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        //  network();
        game();
    }

    private static void game() {
        Scanner scanner = new Scanner(System.in);
        Game game = null;

        System.out.println("Please choose the game you want to play : \n 1 - Football \n 2 - Chess");
        int choice = scanner.nextInt();

        switch (choice) {
            case 1:
                game = new Football();
                break;
            case 2:
                game = new Chess();
                break;
            default:
                System.out.println("Invalid choice!");
                break;
        }

        game.play();
    }

    private static void network() throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        Network network = null;

        System.out.print("Enter Username : ");
        String username = bufferedReader.readLine();

        System.out.print("Enter password : ");
        String password = bufferedReader.readLine();

        System.out.print("Enter message to post : ");
        String message = bufferedReader.readLine();

        System.out.println("Choose a social network for posting message.\n 1 - Facebook \b 2 - Twitter");
        int choice = Integer.parseInt(bufferedReader.readLine());

        switch (choice) {
            case 1:
                network = new Facebook(username, password);
                break;
            case 2:
                network = new Twitter(username, password);
                break;
            default:
                System.out.println("Invalid choice!");
                break;
        }

        if (network != null) {
            network.post(message);
        }
    }
}