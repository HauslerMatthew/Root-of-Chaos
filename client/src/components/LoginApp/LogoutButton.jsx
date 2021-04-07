import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const SubmitMe = styled.button`
    background-color: #D295BF;
    color: #f5f9e9;
    border: 1px solid #f5f9e9;
    margin-left: 10px;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
        background-color: #29274c;
        color: #d295bf;
        border: 1px solid #1C2541;
    }
`;

export default props => {
    const { id, successCallback} = props;

    const logoutUserInSession = e => {
        axios.delete('http://localhost:8000/api/sessions')
        .then(res => {
            successCallback();
        })
    }
    return (
        <SubmitMe onClick={logoutUserInSession}>
            Delete
        </SubmitMe>
    )
}