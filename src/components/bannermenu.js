import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function BannerMenuComp(props) {

    const [submenus, setSubmenus] = useState([]);
    const [activesubmenuname, setActiveSubmenuName] = useState('');

    const mycustmenu = [
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu one',
            'submenu': [
                {
                    'menu_name': 'Transfer of Vehicles '
                },
                {
                    'menu_name': 'Transfer of Vehicles '
                },
                {
                    'menu_name': 'Transfer of Vehicles '
                },
                {
                    'menu_name': 'Transfer of Vehicles '
                },
                {
                    'menu_name': 'Transfer of Vehicles '
                },
                {
                    'menu_name': 'Transfer of Vehicles '
                },
            ],
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu two',
            'submenu': [
                {
                    'menu_name': 'menu two'
                },
                {
                    'menu_name': 'menu two'
                },
                {
                    'menu_name': 'menu two'
                },
                {
                    'menu_name': 'menu two'
                },
            ],
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu three',
            'submenu': [
                {
                    'menu_name': 'menu three'
                },
                {
                    'menu_name': 'menu three'
                },
                {
                    'menu_name': 'menu three'
                },
                {
                    'menu_name': 'menu three'
                },
            ],
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu four',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu five',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu six',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu seven',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu eight',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu nine',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu ten',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu eleven',
        },
        {
            'image_url': './assets/img/menu_img.png',
            'menu_name': 'Menu twelve',
        },

    ];

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
                        mycustmenu.map((value, index) => {
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
                                            <a href='#link'>
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