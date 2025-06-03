<?php
session_start();
require '../modelo/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = sha1($_POST['password']);

    $conexionObj = new Conexion();
    $conn = $conexionObj->getConexion();

    $sql = "INSERT INTO usuario (nombre, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $nombre, $email, $password);

    if ($stmt->execute()) {
            $_SESSION['usuario'] = $nombre;

            header("Location: ../vista/home/index.php");
            exit();
        } else {
            echo "<script>alert('❌ Error al registrar: " . $stmt->error . "'); window.location='../vista/login/index.php';</script>";
        }

    $stmt->close();
    $conn->close();
}
?>