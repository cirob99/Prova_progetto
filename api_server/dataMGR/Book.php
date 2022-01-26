<?php
class Book {
	
	//connessione (inizializzata nel costruttore)
    private $conn;

    // proprietà dei prodotti
    public $id;
    
// il construttore inizializza la variabile per la connessione al DB
public function __construct($db){
    $this->conn = $db;
}

public function getId(){
    return $this->id;
}
public function setId($id_par){
    $this->id = $id_par;
}

// servizio di lettura di tutti i libri posseduti dall'utente, da visualizzare nella home al primo accesso
function readAll(){
    // estraggo tutti i prodotti 
    $query = "SELECT id_libro FROM utenti_libri JOIN utenti WHERE utenti.id_utente = 2";
    echo json_encode($query);
    // preparo la query
    //$stmt = $this->conn->prepare($query); 
    // eseguo la query
    //$stmt->execute(); // NB $stmt conterrà il risultato dell'esecuzione della query (in questo caso un recordset)

    return $query; 
}

// servizio di inserimento di un nuovo collegamente utente_libro
/*function addBook(){
    // inserisco il nuovo prodotto
    $query = "";
    // preparo la query
    $stmt = $this->conn->prepare($query);

    // sanifico...
    $this->name=htmlspecialchars(strip_tags($this->name));

    // invio i valori per i parametri (NB i valori del nuovo prodotto sono nelle variabili d'istanza!!)
    $stmt->bindParam(":name", $this->name);

    // eseguo la query
    $stmt->execute(); // NB $stmt conterrà il risultato dell'esecuzione della query

    return $stmt;		
}*/
}
?>