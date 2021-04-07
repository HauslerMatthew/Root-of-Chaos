import React, { useState } from 'react';
//import axios from 'axios';
import styled from '@emotion/styled';
//import { navigate } from '@reach/router';
import validator from 'validator';
import { navigate } from '@reach/router';

//=================== Emotion Styling ======================
const FormStyle = styled.form`
    border: 2px solid #DDCAD9;
    width: 300px;
    height: 400px;
    margin: 100px;
    border-radius: 15px;
    box-shadow: 2px 2px 15px 6px #211f1c;
    margin-top: 45px;
`

const Errors = styled.div`
    color: #8de4ff;
    font-size: 11px;
    font-weight: bold;
    margin-top: 10px;
`

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
    const { initialUserName, initialEmail, initialPassword, initialConfirmPassword, onSubmitProp } = props;
    //birthday has been removed for MVP
    console.log("LOGGING THE ON SUBMIT PROP", onSubmitProp);

    // const [validationState, setValidationState] = useState({
    //     userName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    //     birthday: ""
    // });

    const [userName, setUserName] = useState(initialUserName);
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState(initialPassword);
    const [confirmPassword, setConfirmPassword] = useState(initialConfirmPassword);
    //const [birthday, setBirthday] = useState(initialBirthday);

    //const [errors, setErrors] = useState([]);
    const [emailError, setEmailError] = useState('');

    // const frontEndValidingState = (e) => {
    //     //console.log(errors) }

    const validateEmail = (e) => {
        var email = e.target.value
    
        if (validator.isEmail(email)) {
            setEmailError('')
            setEmail(e.target.value)
        } else {
            setEmailError('Please enter a valid email address')
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ userName, email, password });
        navigate("/rabbithole");
    }

    return (
        <div>
            <FormStyle onSubmit={onSubmitHandler} > 
                {/* emotion.styled equivalent of a form with id=registration */}
                <div className="form-group">
                    <input className="form-control" type="text" onChange={(e)=> setUserName(e.target.value)} name="userName" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="email" id="userEmail"  onChange={(e) => validateEmail(e)} placeholder="Email" />
                    <Errors> 
                    {/* emotion.styled equivalent of a div */}
                        {emailError}
                    </Errors>
                </div>
                {/* <Label> Password: </Label> */}
                <div className="form-group">
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="confirmPassword" onChange={(e)=> setConfirmPassword(e.target.value)}  placeholder="Confim Password"/>
                    <Errors>
                        {password != confirmPassword? "Passwords need to match": ""}
                    </Errors>
                </div>
                <SubmitMe className="btn btn-primary"> Register </SubmitMe>
            </FormStyle>
        </div>
    )
}