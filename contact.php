<?php
if($_POST["message"]) {
    mail("jonny@debut.careers", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
