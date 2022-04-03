<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Search extends CI_Controller {

	public function __construct() {
        parent:: __construct();
        $this->load->helper('url');
	    $this->load->model('SearchMod');
   }
   
	public function index()
	{
        header('Access-Control-Allow-Origin: *');
        header ("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        //$valuesInHeader = $this->input->request_headers();
        $data = $this->input->get();
        $output = $this->SearchMod->getSearchdetails($data);
        echo json_encode($output);
	}
}
