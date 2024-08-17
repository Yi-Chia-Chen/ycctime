<?php
$pdo = require_once 'connect.php';

$sql = "SELECT * FROM tasks";
$statement = $pdo->query($sql);
$tasks = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($tasks);
