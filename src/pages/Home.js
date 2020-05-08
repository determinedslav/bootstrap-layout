import React from 'react';
import Button from '../components/Button'
import CategoryCard from '../components/CategoryCard'
import PopularItem from '../components/PopularItem'
import GameProviderItem from '../components/GameProviderItem'

const Home = () => {    
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
        <div className="text-white h5">Sport Categories</div>
        <div className="row mb-3"></div>
        <div className="text-white h5">Popular</div>
        <div className="row mb-3 border-bottom border-secondary overflow-auto flex-nowrap">
            <div className="col-lg-3 col-md-2 col-3 mb-2">
                <PopularItem image="product_card-livecasino" text="Live dealer"></PopularItem>
            </div>
            <div className="col-lg-3 col-md-2 col-3 mb-2">
                <PopularItem image="product_card-poker" text="Poker"></PopularItem>
            </div>
            <div className="col-lg-3 col-md-2 col-3 mb-2">
                <PopularItem image="product_card-bombayclub2" text="Bombay Club"></PopularItem>
            </div>
            <div className="col-lg-3 col-md-2 col-3 mb-2">
                <PopularItem image="product_card-promotions" text="Promotions"></PopularItem>
            </div>
            <div className="col-lg-3 col-md-2 col-3 mb-2">
                <PopularItem image="product_card-livechat" text="Support"></PopularItem>
            </div>
        </div>
        <div className="text-white h5">Exciting promotions start here</div>
        <div className="row mb-3"></div>
        <div className="text-white h5">Game Providers</div>
        <div className="row mb-3">
            <div className="col-lg-2 col-4 mb-3">
                <GameProviderItem image="evolution"></GameProviderItem>
            </div>
            <div className="col-lg-2 col-4 mb-3">
                <GameProviderItem image="asiagaming"></GameProviderItem>
            </div>
            <div className="col-lg-2 col-4 mb-3">
                <GameProviderItem image="pragmatic"></GameProviderItem>
            </div>
            <div className="col-lg-2 col-4 mb-3">
                <GameProviderItem image="gameart"></GameProviderItem>
            </div>
            <div className="col-lg-2 col-4 mb-3">
                <GameProviderItem image="betsoft"></GameProviderItem>
            </div>
            <div className="col-lg-2 col-4 mb-3">
                <GameProviderItem image="booming"></GameProviderItem>
            </div>
        </div>
    </div>
}

export default Home;