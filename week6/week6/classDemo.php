<?php



/**
*  Employee Class
*/
class Employee
{
    protected $ename;
    protected $sal;

    function __construct($ename, $sal=100)
    {
        $this->ename = $ename;
        $this->sal = $sal;
    }

    function give_raise($amount){
        $this->sal+=$amount;
        printf("Employee %s got raise of %d dollars <br>",$this->ename, $amount);
        printf("New Salary is %d dollars <br>", $this->sal);
    }

    function __destruct(){
        printf("Good bye, Employee: %s <br>",$this->ename);
    }
}


/**
* Manager Class
*/
class Manager extends Employee
{
    protected $dept;
    protected $employees = array();

    function __construct($ename, $sal, $dept)
    {
        parent::__construct($ename, $sal);
        $this->dept = $dept;
    }
    //Method Overloading
    function give_raise($amount){
        parent::give_raise($amount);
        print "This employee is a manager <br>";
    }

    function __destruct(){
        printf("Good bye, Manager:%s <br>", $this->ename);
        parent::__destruct();
    }
}

$mgr = new Manager('Smith', 300, 200);
$mgr->give_raise(50);
$emp = new Employee("Johnson", 100);
$emp->give_raise(50);

