package UserManagementFacade.data_access_layer;

import UserManagementFacade.entity.User;

public class UserRepository {

    public User saveUser(User user) {
        System.out.println("Saving user data to database");
        return user;
    }

    public User getUserById(String id) {
        System.out.println("Getting user by id");
        User user = new User();
        user.setId("1001");
        user.setName("NMK");
        return user;
    }

    public void deleteUser(String id) {
        System.out.println("Delete user by id");
    }
    
}
