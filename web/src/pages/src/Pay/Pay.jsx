import React, { useState, useContext } from 'react'
import UserContext from '../../../context/userContext'
import Axios from 'axios'
import { useHistory } from "react-router";
function Pay() {
    const history = useHistory();
    const [sel, setSel] = useState('199');
    const { UserData } = useContext(UserContext);
    if(UserData.isPaid) history.push('/home')
    const submit = async(e) => {
        console.log('hi')
        window.open(`/api/pay/${sel}`, '_self');
    }
    return (
        <div>
            <select value={sel} onChange={(event) => {setSel(event.target.value)}}>
            <option value="199">Rs 199</option>
            <option value="299">Rs 299</option>
            <option value="399">Rs 399</option>
            <option value="499">Rs 499</option>
          </select>
          <input type="submit" value="Submit" onClick={submit}/>
        </div>
    )
}

export default Pay;
