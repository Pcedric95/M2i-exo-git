<?php
$random = rand(1, 100);
$message = ($random % 2 == 0) ? "Votre nombre est pair" : "Votre nombre est impair";

echo PHP_EOL, $message, " : ", $random;
?>
