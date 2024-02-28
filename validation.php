<?php


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the query based on the role
$query = "";
$table = "users";

$query = "SELECT * FROM $table WHERE un = '$un'";

$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if ($row["pwd"] === $pwd) {
        session_start();
        $_SESSION['UN'] = $un;
        $_SESSION['cat'] = $rl;
        echo "<script>alert('Login Successful!');</script>";
        header('Location: index.html');
        }
    } 
else {
        echo "<script>alert('Incorrect Password! Try Again')</script>";
        echo "<script>location.href='index.html'</script>";
    }
?>
