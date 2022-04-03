<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TestimonialsMod extends CI_Model
{
    public function __construct()
    {
        // Call the Model constructo
        parent::__construct();
        // $this->load->library('encrypt');
        $this->load->library('mongo_db', array('activate'=>'default'), 'mongo_db'); 
    }

    public function getTestimonials()
    {
        $testimonials_details = $this->mongo_db->select([])->get("testimonials_details");        
        $result['status'] = "success";
        $result['statusCode'] = "200";
        $result['data'] = $testimonials_details;
        return $result;
    }
    
    public function insertTestimonials($data)
    {              
        $this->mongo_db->insert('testimonials_details', 
        array(
            'user_id'=>$data["userid"],
            'user_name'=>$data["username"], 
            'message'=>$data["testimonial_msg"],
            "created_on"=>date('Y-m-d H:i:s'),
            "updated_on"=>date('Y-m-d H:i:s'),
        ));
        $result['status'] = "success";
        $result['statusCode'] = "200";
        $result['msg'] = "Testimonials submitted successfully";
        return $result;
    }

    public function editTestimonials($data)
    {              
        $this->mongo_db->where(array('user_id'=>$data["userid"]));
        $data_ss=array(
            'user_id'=>$data["userid"],
            'user_name'=>$data["username"], 
            'message'=>$data["testimonial_msg"],
            "updated_on"=>date('Y-m-d H:i:s'),
        );
        $this->mongo_db->set($data_ss); 
        $option = array('upsert' => true);
        $this->mongo_db->update('testimonials_details', $option);
        $result['status'] = "success";
        $result['statusCode'] = "200";
        $result['msg'] = "Testimonials updated successfully";
        return $result;
    }
}