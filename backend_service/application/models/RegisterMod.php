<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RegisterMod extends CI_Model
{
    public function __construct()
    {
        // Call the Model constructo
        parent::__construct();
        // $this->load->library('encrypt');
        $this->load->library('mongo_db', array('activate'=>'default'), 'mongo_db'); 

    }
    
    public function insertCustomerDetailss($data)
    {              
        $data['password'] =  md5($data["password"]);
        $user_unique_id = time()."00";  
        $flag=0;        
        $mobile_avaliable = $this->mongo_db->select([])->where(['mobile_no'=>$data['mobile_no']])->get("customer_details");
        if (sizeof($mobile_avaliable)>0) 
        {
            $flag=1;
        }
        $email_avaliable = $this->mongo_db->select([])->where(['email_id'=>$data["email_id"]])->get("customer_details");
        if (sizeof($email_avaliable)>0) 
        {
            $flag=1;
        }
        if ($flag==0) {
            $this->mongo_db->insert('customer_details', 
            array(
                'user_unique_id'=>$user_unique_id,
                'first_name'=>$data["first_name"], 
                'last_name'=>$data["last_name"], 
                'email_id'=>$data["email_id"],
                'mobile_no'=>$data["mobile_no"],
                'mobile_prefix'=>$data["mobile_prefix"],
                'password'=>$data["password"],
                'email_status'=>0,
                'mobile_status'=>0,
                "created_on"=>date('Y-m-d H:i:s'),
                "updated_on"=>date('Y-m-d H:i:s'),
            ));
            $result['status'] = "success";
            $result['statusCode'] = "200";
            $result['msg'] = "You have successfully registered. please wait... you will be redirected to login";
        }
        else{
            $result['status'] = "failed";
            $result['statusCode'] = "400";
            $result['msg'] = "You have already registered. please login";
        }
        return $result;
    }
}