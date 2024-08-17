<?php
$pdo = require_once 'connect.php';

$sql = "SELECT descriptions.id, descriptions.taskId, descriptions.description, tasks.projectId
FROM descriptions
LEFT JOIN tasks
ON descriptions.taskID = tasks.id";

$statement = $pdo->query($sql);
$descriptions = $statement->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($descriptions);
