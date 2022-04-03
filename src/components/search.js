import React, { useState, useLayoutEffect } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { axiosInstance } from '../Services';


function SearchComp(props) {

    const [searchsuggestion, setsearchsuggestion] = useState([]);
    const [searchsuggestionvalue, setsearchsuggestionvalue] = useState('');

    function showDropdown() {
        var a = document.getElementsByClassName('search_suggestions_list');
        if (a.length > 0) {
            a[0].classList.remove('b_none');
            a[0].classList.add('b_block');
        }
    }

    const hideDropdown = e => {
        var a = document.getElementsByClassName('search_suggestions_list');
        if (a.length > 0) {
            a[0].classList.remove('b_block');
            a[0].classList.add('b_none');
        }
        setsearchsuggestion([]);
    }

    function handelonchange(event) {
        setsearchsuggestionvalue(event.target.value);
        getsearchsuggestion();
    }
    function getsearchsuggestion() {

        // axiosInstance.get('/Search', { params: { searchkey: searchsuggestionvalue } })
        //     .then((res) => {
        //         console.log(res.data.data)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }

    return (
        <div className='search_suggestions' onMouseEnter={() => showDropdown()} onMouseLeave={hideDropdown}  >
            <InputGroup>
                <FormControl
                    placeholder="Type the service you are looking for"
                    aria-label="Type the service you are looking for"
                    aria-describedby="basic-addon2"
                    name='search_suggestion'
                    value={searchsuggestionvalue}
                    onChange={handelonchange}

                />
                <Button variant="secondary" id="button-addon2" style={{ width: '100px' }}>
                    <FontAwesomeIcon icon={faSearch} /> &nbsp;
                </Button>
            </InputGroup>

            {searchsuggestion.length > 0 ?
                <div className='search_suggestions_list'>
                    {searchsuggestion.map((value, index) => {
                        return (
                            <p>{value}</p>
                        );
                    })}
                </div> :
                null}
        </div>
    );

}

export default SearchComp;