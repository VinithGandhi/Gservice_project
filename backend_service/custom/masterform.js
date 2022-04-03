$(document).ready(function() {


    $('#submit_master_form').click(function(){
        var form = $('#master_form')[0];
        jsonObj = [];

        for (let i = 0; i < form.length; i++) {
            if(form[i].id!='submit_master_form'){
                item = {};
                item["input_name"] = form[i].name;
                item["input_id"] = form[i].id;
                item["input_value"] = form[i].value;
                item["type"] = form[i].type;
                jsonObj.push(item);
            }            
        }

        $.ajax({
            type: "POST",
            url: base_URL+'GserversCon/insertmasterform',
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify(jsonObj),
            success: function (msg) {
                if (msg.status=='success') {
                    alert("data inserted successfully");
                    location.reload(true);
                } else {
                    alert("data failed to insert");
                    // alert("Cannot add to list !");
                }
            },
            
            // data: jsonObj
        });
    });

    
    $('#submit_secondary_form').click(function(){
        var form = $('#secondary_form')[0];
        jsonObj = [];

        for (let i = 0; i < form.length; i++) {
            if(form[i].id!='submit_secondary_form'){
                item = {};
                item["input_name"] = form[i].name;
                item["input_id"] = form[i].id;
                item["input_value"] = form[i].value;
                jsonObj.push(item);
            }            
        }

        $.ajax({
            type: "POST",
            url: base_URL+'GserversCon/insertsecondaryform',
            contentType: 'application/json',
            dataType: "json",
            data: JSON.stringify(jsonObj),
            success: function (msg) {
                if (msg.status=='success') {
                    alert("data inserted successfully");
                    location.reload(true);
                } else {
                    alert("data failed to insert");
                    // alert("Cannot add to list !");
                }
            },
            
            // data: jsonObj
        });
    });

    $('#navigatetomaster').click(function(){
        window.location.replace(base_URL);
    });

    $('#navigatetosecondary').click(function(){
        window.location.replace(''+base_URL+'/Welcome/viewsecondaryform');
    });






});