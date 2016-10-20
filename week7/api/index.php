<?php

require 'vendor/autoload.php';
include 'dbconnector.php';
include 'dbhandler.php';

$app = new Slim\App();

$app->get('/users', function($request, $response){
    $handler = DbHandler::getInstance();
    $res = $handler->getUsers();

    $response->write(json_encode($res));
    return $response;
});


$app->post('/users', function($request, $response){

    $data = $request->getParsedBody();
    $handler = DbHandler::getInstance();
    $res = $handler->addUser($data);

    $response->write(json_encode($res));
    return $response;
});

$app->get('/users/{id}', function($request, $response){

    $id = $request->getAttribute('id');
    $handler = DbHandler::getInstance();
    $res = $handler->getUserById($id);

    $response->write(json_encode($res));
    return $response;
});


$app->delete('/users/{id}', function($request, $response){

    $id = $request->getAttribute('id');
    $handler = DbHandler::getInstance();
    $res = $handler->removeUser($id);

    $response->write(json_encode($res));
    return $response;
});

$app->run();