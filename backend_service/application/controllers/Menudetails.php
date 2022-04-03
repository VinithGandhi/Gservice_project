<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Menudetails extends CI_Controller {

	public function __construct() {
        parent:: __construct();
        $this->load->helper('url');
	    $this->load->model('MenudetailsMod');
   }

    public function index()
    {
        header('Access-Control-Allow-Origin: *');
        header ("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        $output = $this->MenudetailsMod->getmenudetailss();
        echo json_encode($output);
    }

}
