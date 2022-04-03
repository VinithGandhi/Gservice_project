<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class LoginMod extends CI_Model
{
    public function __construct()
    {
        // Call the Model constructo
        parent::__construct();
        // $this->load->library('encrypt');
        $this->load->library('mongo_db', array('activate'=>'default'), 'mongo_db'); 

    }

    public function checkLoginDetailss($data)
    {
        $data['password'] =  md5($data["password"]);
        $checkavaliable = $this->mongo_db->select([])->where(['mobile_no'=>$data['username'],'password'=>$data["password"] ])->get("customer_details");
        if(sizeof($checkavaliable)>0){
            $payload["userId"]=$checkavaliable[0]["user_unique_id"];
            $payload["username"]=$checkavaliable[0]["mobile_no"];
            $token_value = $this->generatetoken($payload);
            $result['status'] = "success";
            $result['statusCode'] = "200";
            $result['msg'] = "You have loggedin successfully";
            $result['data']= array(
                'username'=> "".$checkavaliable[0]["first_name"]." ".$checkavaliable[0]["last_name"]."",
                'userid'=> $checkavaliable[0]["user_unique_id"],
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

    public function generatetoken($payload)
    {
        $jwt = new JWT();
        $JwtSecretKey = "FirstGserveswebtoken";
        $data= array(
            'userId'=>$payload['userId'],
            'username'=>$payload['username'],
            'iat'=>time(),
            "exp"=>time() + (60 * 1)
        );
        $toke = $jwt->encode($data, $JwtSecretKey, 'HS256');
        return $toke;
    }

    public function verifyjwttokens($data)
    {
        $toke = $data['token'];
        $jwt = new JWT();
        try
        {
            $JwtSecretKey = "FirstGserveswebtoken";
            $decodedToken = $jwt->decode($toke, $JwtSecretKey, ['HS256']);
            $result['status'] = "success";
            $result['statusCode'] = "200";
            $result['msg'] = "Token verified";
            $result['data']= $decodedToken;
        }
        catch (Exception $e){
            $result['status'] = "failed";
            $result['statusCode'] = "400";
            $result['msg'] = $e->getMessage();            
        }
        return $result;

    }



}