import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Link, navigate } from '@reach/router';
import validator from 'validator';

//=================== Emotion Styling ======================
const SubmitMe = styled.button`
    background-color: #90ffdc;
    color: #211f1c;
    border: 1px solid #211f1c;
    margin-left: 10px;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
        background-color: #211f1c;
        color: #8DE4FF;
        border: 1px solid #8DE4FF;
    }
`
;

export default props => {
    //user in session
    //props: this is the page that will list all nuggets by followed users sorted newest top

    const removeFromDom = id => {
        props.setNuggets(props.nuggets.filter(nugget => nugget._id != id))
    }

    return (
        // <div>
        //     {/* { props.nuggets.map((map, index) => {
        //         return ( */}
        //         <div className="card mb-3">
        //             <div className=
        //         </div>
        //             <div className="card mb-3" 
        //             // key={index}
        //             >
        //                 <div className="card-body">
        //                     {/* <Link to={"/nugget/" + nugget._id}>
        //                         {nugget.text}
        //                     </Link> */}
        //                     HELLO THIS IS A TEST. I am testing how big this is. oooh it adjusts by the ammount of text.
        //                 </div>
        //             </div>
        //         {/* )
        //     })} */}
        // </div>

        <div>
            <p>
                replace this p tag with the create component for  the purposes of friday's project day
            </p>
            <div class="row">
                <div class="col-2 offset-2">
                    this is an image placeholder.
                </div>
                <div class="col-7 offset-1">
                    <h1>
                        I'M A NUGGET
                    </h1>
                </div>
                <div class="col-2 offset-4">
                    One of three columns
                </div>
            </div>
        </div>
    )
}