<?php
require_once 'config.php';

function connect($host, $dbname, $username, $password) {
    $data_source_name = "mysql:host=$host; dbname=$dbname;charset=UTF8";
    try {
        $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];
        return new PDO($data_source_name, $username, $password, $options);
    } catch (PDOException $e) {
        die("Could not connect to the database $dbname :" . $e->getMessage());
    }
}

return connect($host, $dbname, $username, $password);
