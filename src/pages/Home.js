import React, {useState} from 'react';
import Button from '../components/Button'
import CategoryCard from '../components/CategoryCard'
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
                    <Button text="Sign In" style="btn-secondary font-weight-bold mr-3" textStyle="gray"></Button>
                    <Button text="Register" style="btn-success font-weight-bold"></Button>
                </div>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-lg-6 mb-3">
                <CategoryCard title="Sports" description="Price Boost every day on all sports" imageUrl="images/card-sports3.png" buttonText="Go to Sports"></CategoryCard>
            </div>
            <div className="col-lg-6">
                <CategoryCard title="Casion" description="Offering the best slots and live dealer games" imageUrl="images/card-casino4.png" buttonText="Go to Casino"></CategoryCard>
            </div>
        </div>
    </div>
}

export default Home;