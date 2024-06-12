<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$dbname = "subscription_db";

// Create connection
$conn = new mysqli($servername, $username, "", $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize the email address
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Prepare and bind the SQL statement to insert the email
    $stmt = $conn->prepare("INSERT INTO subscribers (email) VALUES (?)");
    $stmt->bind_param("s", $email);

    // Execute the SQL statement
    if ($stmt->execute()) {
        echo "Thank you for subscribing!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
