<?php

// this is how to print to the browser
echo "Hello Nicholas <br>";

// Creating variables:
$variable = "Hi Everyone I am a variable";

echo $variable;

// changing a variable
$variable = 90;

//Concatenation
$variable .= " is 90";
echo "<br>";
echo $variable;


echo "<br>";

$complex_str = "hello" . " world";
echo $complex_str;

echo "<br>";

// indexed array
$array = array(1, 2, 3, 4, 5, 6);
echo sizeof($array);
echo "<br>";

//associative array
$asso_arr = array('first' => 1, "second"=>2 );
echo sizeof($asso_arr);
echo "<br>";

echo $asso_arr['first'];
echo "<br>";

/**
*
*/
class MyClass
{
    private $prop1;
    private $prop2 = "property 2";

    function __construct()
    {
        $this->prop1 = "property 1";
    }

    public function getProp1(){
        echo $this->prop1;
    }

    public function setProp1($val){
        $this->prop1 = $val;
    }


    public function getProp2(){
        echo $this->prop2;
    }

    public function setProp2($val){
        $this->prop2 = $val;
    }

}

 $myclass = new MyClass();
 echo $myclass->getProp1();

