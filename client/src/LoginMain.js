import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RegistrationForm from './components/LoginApp/RegistrationForm';
import LoginForm from './components/LoginApp/LoginForm';

export default () => {
    const [ users, setUsers ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);
    const [ user, setUser ] = useState({});

//use bcrypt create secret token that will talk back and forth with the token saved in the backbend unique username and unique key (random string of characters) ie: RoC31mnsalz91 has this string. if tokens match then the user is in session and can access the api.

    useEffect(() => {
        axios.get('http://localhost:8000/api/sessions')
        .then(res => {
            console.log(res);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    }, [])

    const removeFromDom = id => {
        setUsers(users.filter(user => user._id != id));
    }

    const createUser = id => {
        axios.post('http://localhost:8000/api/users', id)
        .then(res => {
            //setUsers([...users, res.data])
            //LOG USER INTO SESSION ON CREATE
            console.log(id);
        })
        .catch(err => console.log("errors trying to add a new user", err))
    }

    const loginUser = id => {
        axios.post('http://localhost:8000/api/sessions')
        .then(res => {
            
        })
    }

    return (
        <div>
            <div className="d-flex flexy">
                <RegistrationForm onSubmitProp={createUser} initialUserName="" initialEmail="" initialPassword="" initialConfirmPassword="" />
                <LoginForm onSubmitProp={loginUser} />
            </div>
                {/* {loaded && 
                    <UserList users={users} setUsers={setUsers} removeFromDom={removeFromDom}/>
                } */}
        </div>
    )
}