<?php
//PHP Basics

//Arrays
$state[0] = "Port Of Spain";
$state[1] = "St Georges";
$state[2] = "Basseterre";

$state[] = "Kingstown";
$state[] = "The Valley";

echo $state[4];

$state['pos'] = "Trinidad";

//Using the array() function for creating arrays

$languages = array("English", "Gaelic", "Spanish");
// $languages[0] = "English", $languages[1] = "Gaelic", $languages[2] = "Spanish"

$languages = array("Spain" => "Spanish",
					"Ireland" => "Gaelic",
					"United States" => "English");
// $languages["Spain"] = "Spanish"
// $languages["Ireland"] = "Gaelic"
// $languages["United States"] = "English"



class Point {
	public $x;
	public $y;

	function __construct($x,$y) {
		$this->x=$x;
		$this->y=$y;
	}
	function get_x() {
		return($this->x);
	}
	function get_y() {
		return($this->y);
	}
	function dist($p) {
		return(sqrt( pow($this->x-$p->get_x(),2)+
		pow($this->y-$p->get_y(),2)));
	}
} // Class ends here
$p1=new Point(2,3);
$p2=new Point(3,4);
echo $p1->dist($p2),"\n";
$p2->x=5;
echo $p1->dist($p2),"\n";


class employee {
	protected $ename;
	protected $sal;
	function __construct($ename, $sal = 100) {
		$this->ename = $ename;
		$this->sal = $sal;
	}
	function give_raise($amount) {
		$this->sal+= $amount;
		printf("Employee %s got raise of %d dollars\n", $this->ename, $amount);
		printf("New salary is %d dollars\n", $this->sal);
	}
	function __destruct() {
		printf("Good bye, cruel world: EMPLOYEE:%s\n", $this->ename);
	}
}
class manager extends employee {
	protected $dept;

	function __construct($ename, $sal, $dept) {
		parent::__construct($ename, $sal);
		$this->dept = $dept;
	}
	//Method Overloading
	function give_raise($amount) {
		parent::give_raise($amount);
		print "This employee is a manager\n";
	}
	function __destruct() {
		printf("Good bye, cruel world: MANAGER:%s\n", $this->ename);
		parent::__destruct();
	}
} // Class definition ends here.
$mgr = new manager("Smith", 300, 20);
$mgr->give_raise(50);
$emp = new employee("Johnson", 100);
$emp->give_raise(50);

//An interface for classes that provide traversal of objects stored within
// interface Iterator {
// 	public function rewind(); // Returns the iterator the beginning
// 	public function next(); // Get to the next member
// 	public function key(); // Get the key of the current object.
// 	public function current(); // Get the value of the current object
// 	public function valid(); // Is the current index valid?
// }

class EmployeeManager implements iterator {
	private $items;
	private $index = 0;

	function __construct(array $items) {
		$this->items = $items;
	}
	function rewind() {
		$this->index = 0;
	}
	function current() {
		return ($this->items[$this->index]);
	}
	function key() {
		return ($this->index);
	}
	function next() {
		$this->index++;
		if (isset($this->items[$this->index])) {
			return ($this->items[$this->index]);
		} else {
			return (NULL);
		}
	}
	function valid() {
		return (isset($this->items[$this->index]));
	}
}

// $x = new Iterator(range('A', 'D'));
// foreach ($x as $key => $val) {
// 	echo "key=$key  value=$val <br />";
// }
?>