import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import NuggetForm from './NuggetForm';

//=================== Emotion Styling ======================

const Nugget = styled.div`
    margin-bottom: 15px;
    border: 2px solid #DDCAD9;
    background: rgba(255,255,255,0);
    width: 300px;
    height: max-content;
    margin-left: 25px;
    border-radius: 15px;
    box-shadow: 2px 2px 15px 6px #211f1c;
`;

const AllNuggets = () => {
    const [allNuggets, setAllNuggets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/nuggets")
            .then(res => {
                console.log("making axios get the nuggets...")
                console.log(res)
                setAllNuggets(res.data)
            })
            .catch(err => console.log("errors retrieving all nuggets", err))
    }, [])

    return (
        <div className="container w-75 p-3">
            <h2>The Nuggets</h2>
            <div className="d-flex">
                {allNuggets.map((nug, idx) => {
                    return (
                        <Nugget className="card opacity-0" key={idx}>
                            <div className="card-body">
                                <h5 className="card-title">{nug.text}</h5>
                                <p className="card-text">{nug.user}</p>
                            </div>
                        </Nugget>
                    )}
                    )}
            </div>
        </div>
    );
};

export default AllNuggets;