<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Testimonials extends CI_Controller {

	public function __construct() {
        parent:: __construct();
        $this->load->helper('url');
	    $this->load->model('TestimonialsMod');
   }

    public function index()
    {
        header('Access-Control-Allow-Origin: *');
        header ("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        $output = $this->TestimonialsMod->getTestimonials();
        echo json_encode($output);
    }
   
	public function insert()
	{
        header('Access-Control-Allow-Origin: *');
        header ("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if(isset($data))
        {
            $output = $this->TestimonialsMod->insertTestimonials($data);
            echo json_encode($output);
        }
        else
        {
            $data = "Required fields have no values";
            echo json_encode($data);
        }
	}

	public function edit()
	{
        header('Access-Control-Allow-Origin: *');
        header ("Access-Control-Allow-Headers: *");
        header('Content-Type: application/json');
        $data = json_decode(file_get_contents('php://input'), true);
        if(isset($data))
        {
            $output = $this->TestimonialsMod->editTestimonials($data);
            echo json_encode($output);
        }
        else
        {
            $data = "Required fields have no values";
            echo json_encode($data);
        }
	}

}
