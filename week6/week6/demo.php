<?php


    $dbhost = "127.0.0.1";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "demo";

    try {
        $mysqli = new mysqli($dbhost, $dbuser, $dbpass,
            $dbname);
    } catch (Exception $e) {
        echo $e;
    }

    $sql = "SELECT * FROM `country`";

    $result = $mysqli->query($sql);
    $arrRes = array();

    while ($arr = $result->fetch_assoc()) {
        $arrRes[] = $arr;
    }
    // Converting array to JSON
    // echo json_encode($arrRes);

    printForm();

    printAsTable($arrRes);
    echo "<br>";
    printAsDropDown($arrRes);

    function printAsTable($countries){
        echo "<table>";
        echo "<thead>".
                "<tr>".
                    "<td>ID</td>".
                    "<td>Country</td>".
                    "<td>Population</td>".
                "</tr>".
            "</thead>";
        echo "<tbody>";
        foreach ($countries as $country) {
            echo "<tr>";
            echo "<td>".$country['id']."</td>";
            echo "<td>".$country['country']."</td>";
            echo "<td>".$country['population']."</td>";
            echo "</tr>";
        }


        echo "</tbody>";
        echo "</table>";
    }


    function printAsDropDown($countries){
        echo "<select>";
        foreach ($countries as $country) {
            echo "<option value='".$country['id']."'>".
                    $country['country'].
                "</option>";
        }
        echo "</select>";
    }


    function printForm(){
        echo "<form method='post'>";
        echo "Name: ";
        echo "<input type='text' name='name' />";
        echo "Population: ";
        echo "<input type='text' name='population' />";
        echo "<input type='submit' value='Submit' />";
        echo "</form>";
    }


    if (isset($_POST['name']) && $_POST['name'] != '' &&
        $_POST['population'] !='') {

        $name = $_POST['name'];
        $population = $_POST['population'];
        echo $name, $population;

        $insert = "INSERT into country
                (`country`, `population`)
                values
                ('$name', $population)";
        try {
            $result = $mysqli->query($insert);
            echo "Success!!";
            unset($_POST);
        } catch (Exception $e) {
            echo $e;
        }

    }


