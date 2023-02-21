import React from 'react';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Feedbacks from '../Feebacks/Feedbacks';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Awards></Awards>
            <Blogs></Blogs>
            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </div>
    );
};

export default Home;