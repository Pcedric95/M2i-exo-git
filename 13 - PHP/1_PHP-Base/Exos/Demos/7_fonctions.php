<?php

$message = "Hello world";

function hello(string $unMessage) : string{
    return print($unMessage);
}

hello($message);

function soustraire(int $nb1, int $nb2) : int {
    echo __FUNCTION__, PHP_EOL;
    return $nb1 - $nb2;
}

echo soustraire(10,5), PHP_EOL;