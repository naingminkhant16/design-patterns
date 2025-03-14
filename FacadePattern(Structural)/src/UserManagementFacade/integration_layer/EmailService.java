package UserManagementFacade.integration_layer;

import UserManagementFacade.entity.User;

public class EmailService {
    public void sendWelcomeEmail(User user) {
        System.out.println("Sending welcome email to " + user.getName());
    }
}
