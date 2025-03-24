package UserManagementFacade.presentation_layer;

import UserManagementFacade.entity.User;
import UserManagementFacade.service_layer.UserManagementFacade;

public class Main {
    public static void main(String[] args) {
        UserManagementFacade userManagementFacade = new UserManagementFacade();
        User newUser = userManagementFacade.createUser("John Doe");
        System.out.println("User is created with ID : " + newUser.getId());

        // Get a user by id
        User retrievedUser = userManagementFacade.getUserById(newUser.getId());
        System.out.println("User retrieved: " + retrievedUser.getName());

        // Delete user
        userManagementFacade.deleteUser(newUser.getId());
        System.out.println("User with ID " + newUser.getId() + " deleted.");
    }
}
