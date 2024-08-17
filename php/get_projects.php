<?php
$pdo = require_once 'connect.php';

$sql = "SELECT * FROM projects";
$statement = $pdo->query($sql);
$projects = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($projects);
