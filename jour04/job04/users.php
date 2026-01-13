<?php

header('Content-Type: application/json; charset=utf-8');

$host = 'localhost';
$dbname = 'utilisateurs';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $query = "SELECT id, nom, prenom, email FROM utilisateurs ORDER BY id";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    
    $utilisateurs = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($utilisateurs, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
} catch (PDOException $e) {
    // Données de test si la base de données n'existe pas
    $utilisateurs = [
        ['id' => 1, 'nom' => 'Dupont', 'prenom' => 'Jean', 'email' => 'jean.dupont@example.com'],
        ['id' => 2, 'nom' => 'Martin', 'prenom' => 'Marie', 'email' => 'marie.martin@example.com'],
        ['id' => 3, 'nom' => 'Bernard', 'prenom' => 'Pierre', 'email' => 'pierre.bernard@example.com'],
        ['id' => 4, 'nom' => 'Dubois', 'prenom' => 'Sophie', 'email' => 'sophie.dubois@example.com'],
        ['id' => 5, 'nom' => 'Moreau', 'prenom' => 'Luc', 'email' => 'luc.moreau@example.com']
    ];
    
    echo json_encode($utilisateurs, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
}
?>