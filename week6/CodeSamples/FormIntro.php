<?php

session_start();
$sid = session_id();

// If the name field is filled in
if (isset($_POST['name']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$location= $_POST['loca'];
echo "Hi $name <br /> Has an address of $email <br /> And Lives at $location<br/>";

$_SESSION['username'] = $name;
}
?>
<form action="formintro.php" method="post">
<p>
Name:<br />
<input type="text" id="name" name="name" size="20" maxlength="40" />
</p>
<p>
Email Address:<br />
<input type="text" id="email" name="email" size="20" maxlength="40" />
</p>

Location:<br />
<input type"text" id="location" name="loca" soze"20" maxlenght="40" />
</p>
<input type="submit" id="submit" name = "submit" value="Go!" />
</form>