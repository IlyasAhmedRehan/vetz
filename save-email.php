<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $file = 'emails.txt';  // Path to your file
    file_put_contents($file, $email . PHP_EOL, FILE_APPEND | LOCK_EX);
    echo "Email saved successfully!";
}
?>
