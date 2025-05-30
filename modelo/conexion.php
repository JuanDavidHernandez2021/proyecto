
<?php
class Conexion {
    private $conexion;

    public function __construct() {
        $this->conexion = new mysqli('localhost', 'root', '', 'tienda_sportx');

        if ($this->conexion->connect_error) {
            die('Error en la conexión: ' . $this->conexion->connect_error);
        }
    }

    // Método para obtener la conexión (si necesitas acceso directo)
    public function getConexion() {
        return $this->conexion;
    }

    public function consultaActualizar($sql) {
        return $this->conexion->query($sql);
    }

    public function consultaTabla($sql) {
        $consulta = $this->conexion->query($sql);
        return $consulta->fetch_all(MYSQLI_ASSOC);
    }

    public function consultaFila($sql) {
        $consulta = $this->conexion->query($sql);
        return $consulta->fetch_assoc();
    }
}
?>
