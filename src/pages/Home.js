import React, {useState} from 'react';
import Button from '../components/Button'
//import {useSelector, useDispatch} from "react-redux";
//import { useHistory } from "react-router-dom";

const Home = () => {    

    /*
    //getters/setters
    const [region, setRegion] = useState(' ');
    const [regionFull, setRegionFull] = useState(' ');
    const [name, setName] = useState(' ');
    const [errorMessage, setErrorMessage] = useState(' ');

    const [matches] = useState([]);

    const isLoading = useSelector(state => state.loading);

    const dispatch = useDispatch();
    const history = useHistory();
    */

    //Home page render
    return <div>
        <div className="row">
            <div className="col">
                Placeholder
                <div className="float-right">
                    <Button text="Sign In" style="btn-secondary font-weight-bold" textStyle="gray"></Button>
                    <Button text="Register" style="btn-success font-weight-bold"></Button>
                </div>
            </div>
        </div>
    </div>
}

export default Home;