import React from 'react';
import HomeReview from '../../HomeReview/HomeReview';
import OtherService from '../../OtherService/OtherService';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from './Sheard/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <HomeReview></HomeReview>
            <OtherService></OtherService>
            <Footer></Footer>
        </div>
    );
};

export default Home;