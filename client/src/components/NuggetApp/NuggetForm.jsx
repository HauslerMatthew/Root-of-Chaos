import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';
import FileUploader from '../FileUploader';

//=================== Emotion Styling ======================
const FormStyle = styled.form`
border: 2px solid #DDCAD9;
background: rgba(255,255,255,0);
width: 300px;
height: 400px;
margin-left: 125px;
border-radius: 15px;
box-shadow: 2px 2px 15px 6px #211f1c;
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
`;

export default () => {
    // const [file, setFile] = useState(initialFile);
    const [formInfo, setFormInfo] = useState({
        text: "",
    })
    // const [media_type, setMediaType] = useState(initialMediaType);
    const [errors, setErrors] = useState({});

    const changeHandler = e => {
        // console.log("changing form...")
        // console.log(e.target)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/nuggets/", formInfo)
            .then(res => {
                console.log("response after submitting the post request!", res)
                if (res.data.errors) {
                    console.log("validation errors")
                    setErrors(res.data.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }
        //navigate("/rabbithole/") rabbithole route not yet created

    return (
        <div>
            <form onSubmit={ onSubmitHandler } >
                <div className="form-group">
                {/* <FileUploader /> */}
                <input type="textarea" name="text" value={formInfo.text} placeholder="Text" onChange={changeHandler}/> 
                {/* <select>
                    <option value="text">
                        Text
                    </option>
                    <option>
                        Image
                    </option>
                </select> */}
            <SubmitMe type="submit" className="btn btn-success">
                Nugget
            </SubmitMe>
            </div>
            </form>
        </div>
    )
}

