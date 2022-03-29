<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class GserversMod extends CI_Model
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
                'mobile_status'=>0
            ));
            $result['status'] = "success";
            $result['statusCode'] = "200";
            $result['msg'] = "You have successfully registered. please login";
        }
        else{
            $result['status'] = "failed";
            $result['statusCode'] = "400";
            $result['msg'] = "You have already registered. please login";
        }
        return $result;
    }

    public function checkLoginDetailss($data)
    {
        $data['password'] =  md5($data["password"]);
        $checkavaliable = $this->mongo_db->select([])->where(['mobile_no'=>$data['username'],'password'=>$data["password"] ])->get("customer_details");
        if(sizeof($checkavaliable)>0){
            $token_value = $this->generatetoken($checkavaliable[0]["user_unique_id"],$checkavaliable[0]["mobile_no"]);
            $result['status'] = "success";
            $result['statusCode'] = "200";
            $result['msg'] = "You have loggedin successfully";
            $result['data']= array(
                'username'=> "".$checkavaliable[0]["first_name"]." ".$checkavaliable[0]["last_name"]."",
                'authToken'=>$token_value,
            );
        }
        else{
            $result['status'] = "failed";
            $result['statusCode'] = "400";
            $result['msg'] = "User not registered yet or incorrect credentials";
            $result['authToken']='';
        }
        return $result;
    }


    public function generatetoken($userId, $username)
    {
        $jwt = new JWT();
        $JwtSecretKey = "FirstGserveswebtoken";
        $data= array(
            'userId'=>$userId,
            'username'=>$username,
            'iat'=>time(),
            "exp"=>time()+1800
        );
        $toke = $jwt->encode($data, $JwtSecretKey, 'HS256');
        return $toke;
    }

    // public function verifyjwttokens()
    // {
    //     $toke = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEyMzQsInVzZXJuYW1lIjoidGVzdGluZyJ9.J_VFaWMgXZhSeJxxMjzdko32BviBmFn8I1-5TsH6OCM';

    //     $jwt = new JWT();

    //     $JwtSecretKey = "testingkeywords";

    //     $decodedToken = $jwt->decode($toke, $JwtSecretKey, ['HS256']);

    //     print_r($decodedToken);

    //     // $token1 = $jwt->jsonEncode($decodedToken);
    //     // print_r($token1);

    // }



}