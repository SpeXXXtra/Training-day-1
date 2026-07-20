public enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    CANCELLED
}
public class e {
    public static void main(String[] args) {
        // Assigning an enum constant
        OrderStatus currentStatus = OrderStatus.PENDING;
        System.out.println("Current Status: " + currentStatus); 
    }
}