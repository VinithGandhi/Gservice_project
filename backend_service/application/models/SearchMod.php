<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SearchMod extends CI_Model
{
    public function __construct()
    {
        // Call the Model constructo
        parent::__construct();
        // $this->load->library('encrypt');
        $this->load->library('mongo_db', array('activate'=>'default'), 'mongo_db'); 
    }

    public function getSearchdetails($data)
    {
        $resStr = str_replace('-', ' ', $data['searchkey']);
        $menu_details = $this->mongo_db->select([])->where(['flag'=>1])->get("menu_details");
        $result['status'] = "success";
        $result['statusCode'] = "200";
        $result['data'] = $menu_details;
        return $result;
    }
}