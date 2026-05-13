<?php

$archivo = 'ofertas.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $empresa = $_POST['empresa'];
    $puesto = $_POST['puesto'];
    $ubicacion = $_POST['ubicacion'];
    $tipo = $_POST['tipo'];
    $descripcion = $_POST['descripcion'];

    $nuevaOferta = [

        'empresa' => $empresa,
        'puesto' => $puesto,
        'ubicacion' => $ubicacion,
        'tipo' => $tipo,
        'descripcion' => $descripcion

    ];

    if (file_exists($archivo)) {

        $contenido =
            file_get_contents($archivo);

        $ofertas =
            json_decode($contenido, true);

        if (!$ofertas) {

            $ofertas = [];

        }

    } else {

        $ofertas = [];

    }

    $ofertas[] = $nuevaOferta;

    file_put_contents(

        $archivo,

        json_encode(
            $ofertas,
            JSON_PRETTY_PRINT
        )

    );

    header('Location: index.html');
    exit;

}

?>