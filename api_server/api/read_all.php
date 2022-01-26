<?php
//stabilisco i permessi di lettura del file (anyone)
header("Access-Control-Allow-Origin: *");
// definisco il formato della risposta (json)
header("Content-Type: application/json; charset=UTF-8");

// includo le classi per la gestione dei dati
include_once '../dataMGR/Database.php';
include_once '../dataMGR/Book.php';
 
// creo una connessione al DBMS
$database = new Database();
$db = $database->getConnection();
 
// creo un'istanza di Libro
$libro = new Book($db);

$stmt = $libro->readAll(); 

if($stmt !=0) { // se ci sono dei prodotti...
    // creo una coppia products: [lista-di-prodotti]

    
    http_response_code(200); // response code 200 = tutto ok

	// trasformo la coppia products: [lista-di-prodotti] in un oggetto JSON vero e proprio e lo invio in HTTP response
    echo json_encode($products_list);
}
 
else { // se NON ci sono  prodotti...
    http_response_code(404); // response code 404 = Not found
    // creo un oggetto JSON costituito dalla coppia message: testo-del-messaggio
    echo json_encode(array("message" => "No products found"));
}
?>