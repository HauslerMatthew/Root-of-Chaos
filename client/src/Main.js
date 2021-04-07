import react, { useEffect, useState } from 'react';
import axios from 'axios';
import NuggetForm from './components/NuggetApp/NuggetForm';
import NuggetList from './components/NuggetApp/NuggetList';

export default () => {
    const [ nuggets, setNuggets ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/nuggets')
        .then(res => {
            console.log(res);
            setNuggets(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    }, [])

    const removeFromDom = id => {
        setNuggets(nuggets.filter(nugget => nugget._id != id));
    }

    const createNugget = id => {
        axios.post('http://localhost:8000/api/nuggets', id)
        .then(res => {
            setNuggets([...nuggets, res.data])
        })
        .catch(err => console.log("errors trying to add a new nugget", err))
    }

    return (
        <div id="flexy">
            {loaded && 
                <NuggetList nuggets={nuggets} setNuggets={setNuggets} removeFromDom={removeFromDom}/>
            }
        </div>
    )
}