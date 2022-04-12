<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AddtocartMod extends CI_Model
{
    public function __construct()
    {
        // Call the Model constructo
        parent::__construct();
        // $this->load->library('encrypt');
        $this->load->library('mongo_db', array('activate'=>'default'), 'mongo_db'); 
    }
    
    public function insertaddtocart($data)
    {      
        print_r($data);
        
        // $this->mongo_db->insert('testimonials_details', 
        // array(
        //     'user_id'=>$data["userid"],
        //     'user_name'=>$data["username"], 
        //     'message'=>$data["testimonial_msg"],
        //     "created_on"=>date('Y-m-d H:i:s'),
        //     "updated_on"=>date('Y-m-d H:i:s'),
        // ));
        // $result['status'] = "success";
        // $result['statusCode'] = "200";
        // $result['msg'] = "Testimonials submitted successfully";
        // return $result;
    }

}