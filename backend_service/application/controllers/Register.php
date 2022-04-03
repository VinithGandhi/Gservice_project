<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller {

	public function __construct() {
        parent:: __construct();
        $this->load->helper('url');
	    $this->load->model('RegisterMod');
   }
   
	public function index()
	{
        header('Access-Control-Allow-Origin: *');
        header ("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if(isset($data))
        {
            $output = $this->RegisterMod->insertCustomerDetailss($data);
            echo json_encode($output);
        }
        else
        {
            $data = "Required fields have no values";
            echo json_encode($data);
        }
	}
}
