module com.example.traveler {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.kordamp.bootstrapfx.core;

    opens com.example.traveler to javafx.fxml;
    exports com.example.traveler;
}