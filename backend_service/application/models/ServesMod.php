<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ServesMod extends CI_Model
{
    public function __construct()
    {
        // Call the Model constructo
        parent::__construct();
        // $this->load->library('encrypt');
        $this->load->library('mongo_db', array('activate'=>'default'), 'mongo_db'); 
    }

    public function getServesdetails($data)
    {
        $resStr = str_replace('-', ' ', $data['serves']);
        $serves_details = $this->mongo_db->select([])->where(['serves_name'=>ucwords($resStr)])->get("serves_details");        
        $result['status'] = "success";
        $result['statusCode'] = "200";
        $result['data'] = $serves_details;
        return $result;
    }
}