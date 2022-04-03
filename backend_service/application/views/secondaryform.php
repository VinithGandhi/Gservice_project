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
        <h3>secondary form insert</h3>
        <form class="secondary_form" id="secondary_form">

        <?php 
            if(sizeof($result["data"])>0)
            {
                foreach($result["data"] as $value)
                {
                    if($value["type"]=="text"){
                        echo " <div><input type=".$value['type']." id=".$value['input_id']." name=".$value['input_name']."  value=".$value['input_value']."></div><br>";
                    }                
                }
            }
            else{
                echo "no data found </br> </br>";

            }
        ?>            
            <button type="button" id="submit_secondary_form">Submit</button>
        </form>
            <br>
        <button type="button" id="navigatetomaster"><<<< Back to Master Form</button>
    </div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" 
integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin="anonymous"></script>
<script src="<?php echo base_url();?>custom/masterform.js"></script>

</body>
</html>
