<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome</title>
    <script>
        var base_URL = "<?php echo base_url();?>";
    </script>
</head>
<body>
    <div id="container">
        <h3>Master form insert</h3>
        <form class="master_form" id="master_form">
            <div>
                <input type="text" id="uid" name="uname" placeholder="input form" value="">
            </div>
            <br>
            <div>
                <input type="text" id="uid2" name="uname2" placeholder="input form2" value="">
            </div>
            <br>
            <button type="button" id="submit_master_form">Submit</button>

        </form>
        <br>
        <button type="button" id="navigatetosecondary"> navigete to secondary Form >>></button>
    </div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" 
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin="anonymous"></script>
<script src="<?php echo base_url();?>custom/masterform.js"></script>

</body>
</html>
