<?php

	$_GET['username'];
	$persons = array();
	$persons[] = array('firstname'=>'Kyle','lastname'=>'DeFreitas');
	$persons[] = array('firstname'=>'Craig','lastname'=>'Ramlal');
	$persons[] = array('firstname'=>'Akash','lastname'=>'Pooransingh');
	$persons[] = array('firstname'=>'Yudhistre','lastname'=>'Jonas');

	$persons[4] = array('firstname'=>'Nobody','lastname'=>'Special');
	//print_r($persons);

	echo json_encode($persons);
?>