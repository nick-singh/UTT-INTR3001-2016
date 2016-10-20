<?php


    /**
    * This class is responsible for all database logic
    * it handles the storing/updating/deleting/retreiving of data to and from the database
    */

    class DbHandler
    {
        private $db;

        protected static $instance = null;

        protected  function __construct(){

            $this->db = DbConnect::getInstance();

        }

        public static function getInstance(){

            if (!isset(static::$instance)) {
                static::$instance = new static;
            }
            return static::$instance;
        }


        public function getUsers(){
            $sql = "SELECT * from users";
            try {
                $conn = $this->db->getConnection();
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_OBJ);
                $conn = null;
                return $users;
            } catch (PDOException $e) {
                return array('message' => $e->getMessage(), "status"=>500);
            }
        }


        public function removeUser($id){
            $sql = "DELETE FROM `users` WHERE id = :id";
            try {
                $conn = $this->db->getConnection();
                $stmt = $conn->prepare($sql);
                $stmt->bindParam('id', $id);
                $stmt->execute();
                $conn = null;

                return array('status' => 200);
            } catch (PDOException $e) {
                return array('message' => $e->getMessage(), "status"=>500);
            }
        }


        public function getUserById($id){
            $sql = "SELECT * from `users` WHERE id = :id";
            try {
                $conn = $this->db->getConnection();
                $stmt = $conn->prepare($sql);
                $stmt->bindParam('id', $id);
                $stmt->execute();
                $users = $stmt->fetchObject();
                $conn = null;
                return $users;
            } catch (PDOException $e) {
                return array('message' => $e->getMessage(), "status"=>500);
            }
        }

        public function addUser($data){
            $sql = "INSERT INTO `social`.`users`
                    ( `picture`, `age`, `firstName`, `lastName`, `gender`, `company`, `email`, `phone`, `address`, `about`, `registered`, `greeting`, `favoriteFruit`)
                    VALUES
                    (:picture, :age, :firstName, :lastName, :gender, :company, :email, :phone, :address, :about, :registered, :greeting, :favoriteFruit);";
            try {
                $conn = $this->db->getConnection();
                $stmt = $conn->prepare($sql);
                $stmt->bindParam('picture', $data['picture']);
                $stmt->bindParam('age', $data['age']);
                $stmt->bindParam('firstName', $data['firstName']);
                $stmt->bindParam('lastName', $data['lastName']);
                $stmt->bindParam('gender', $data['gender']);
                $stmt->bindParam('company', $data['company']);
                $stmt->bindParam('email', $data['email']);
                $stmt->bindParam('phone', $data['phone']);
                $stmt->bindParam('address', $data['address']);
                $stmt->bindParam('about', $data['about']);
                $stmt->bindParam('registered', $data['registered']);
                $stmt->bindParam('greeting', $data['greeting']);
                $stmt->bindParam('favoriteFruit', $data['favoriteFruit']);
                $stmt->execute();
                $id = $conn->lastInsertId();
                $data[] = array('id' => $id);
                $conn = null;
                return array('status' => 200, "data"=> $data);

            } catch(PDOException $e) {
                return array('message' => $e->getMessage(), "status"=>500);
            }
        }



    }

?>