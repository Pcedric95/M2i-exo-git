<?php

namespace tests\demo1;
use PHPUnit\Framework\TestCase;
use src\demo1\Calculatrice;

class CalculatriceTest extends TestCase
{
    public function testCalculatriceAddition_ShouldReturn_10_WithValues_5_5(){
        // Arrange
        $calculatrice = new Calculatrice();
        $a = 5.0;
        $b = 5.0;
        $resultExected = 10.0;

        // Act
        $result = $calculatrice->additon($a, $b);

        // Assert
        $this->assertEquals($resultExected, $result);
    }
}