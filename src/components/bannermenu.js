import React, { useState, useLayoutEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosInstance } from '../Services';


function BannerMenuComp(props) {

    // db.menu_details.insert([
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department one",
    //         "url": "department-one",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department two",
    //         "url": "department-two",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department three",
    //         "url": "department-three",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department four",
    //         "url": "department-four",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department five",
    //         "url": "department-five",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department six",
    //         "url": "department-six",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department seven",
    //         "url": "department-seven",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department eight",
    //         "url": "department-eight",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department nine",
    //         "url": "department-nine",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department ten",
    //         "url": "department-ten",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department eleven",
    //         "url": "department-eleven",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     },
    //     {
    //         "image_url": "../assets/img/menu_img.png",
    //         "menu_name": "Department twelve",
    //         "url": "department-twelve",
    //         "created_on" : "2022-04-02 20:00:56",
    //         "updated_on" : "2022-04-02 20:00:56",
    //         "flag": 1,
    //         "submenu": [
    //             {
    //                 "menu_name": "Serves one",
    //                 "url": "serves-one"
    //             },
    //             {
    //                 "menu_name": "Serves two",
    //                 "url": "serves-two"
    //             },
    //             {
    //                 "menu_name": "Serves three",
    //                 "url": "serves-three"
    //             },
    //             {
    //                 "menu_name": "Serves four",
    //                 "url": "serves-four"
    //             },
    //             {
    //                 "menu_name": "Serves five",
    //                 "url": "serves-five"
    //             },
    //             {
    //                 "menu_name": "Serves six",
    //                 "url": "serves-six"
    //             },
    //             {
    //                 "menu_name": "Serves seven",
    //                 "url": "serves-seven"
    //             },
    //             {
    //                 "menu_name": "Serves eight",
    //                 "url": "serves-eight"
    //             },
    //             {
    //                 "menu_name": "Serves nine",
    //                 "url": "serves-nine"
    //             },
    //             {
    //                 "menu_name": "Serves ten",
    //                 "url": "serves-ten"
    //             },
    //             {
    //                 "menu_name": "Serves eleven",
    //                 "url": "serves-eleven"
    //             },
    //             {
    //                 "menu_name": "Serves twelve",
    //                 "url": "serves-twelve"
    //             }
    //         ]
    //     }
    // ]);
    
    const [submenus, setSubmenus] = useState([]);
    const [menudetails, setMenudetails] = useState([]);
    const [activesubmenuname, setActiveSubmenuName] = useState('');

    useLayoutEffect(() => {
        axiosInstance.get('/Menudetails')
            .then((res) => {
                setMenudetails(res.data.data);
            }).catch((error) => {
                console.log('error');
            });
    }, []);

    function showDropdown(data, name) {
        var a = document.getElementsByClassName('banner_mega_menu');
        if (data !== undefined) {
            setSubmenus(data);
            setActiveSubmenuName(name);
            a[0].classList.remove('b_none');
            a[0].classList.add('b_block');
        }
        else {
            setSubmenus([]);
            setActiveSubmenuName('');
            a[0].classList.remove('b_block');
            a[0].classList.add('b_none');
        }
    }


    const hideDropdown = e => {
        var a = document.getElementsByClassName('banner_mega_menu');
        setSubmenus([]);
        a[0].classList.remove('b_block');
        a[0].classList.add('b_none');
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true
    };

    return (
        <>
            <div className='banner_menu' onMouseLeave={hideDropdown}>
                <Slider {...settings}>
                    {
                        menudetails.map((value, index) => {
                            return (
                                <div key={index} className='banner_menu_cnt'
                                    onMouseEnter={() => showDropdown(value.submenu, value.menu_name)}>
                                    <img src={value.image_url} alt="menu" />
                                    <p>{value.menu_name}</p>
                                </div>
                            );
                        })
                    }
                </Slider>

                <div className='banner_mega_menu b_none' onMouseLeave={hideDropdown}>
                    <div className='banner_mega_menu_header'>
                        <Row>
                            <Col>
                                <h3>{activesubmenuname}</h3>
                            </Col>
                        </Row>
                    </div>
                    <div className='banner_mega_menu_content '>
                        <Row>
                            {submenus.map((value, index) => {
                                return (
                                    <Col lg={4} key={index} style={{ paddingBottom: 20 }}>
                                        <div className='megamenu_cnt'>
                                            <a href={'/serves/'+value.url}>
                                                {value.menu_name}
                                            </a>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerMenuComp;