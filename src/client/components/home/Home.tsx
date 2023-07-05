import React from 'react';
import Banner from './banner/Banner'
import Services from './service/Service';
import Team from './team/Team';
import Testimonial from './testimonial/Testimonial';
import Gallery from './gallery/Gallery';
import About from './about/About';

const Home: React.FC<any> = () => {
  return (
    <div>
      <div className='main-wrapper'>
        <Banner />
        <About />
        <Services />
        <Team />
        <Testimonial />
        <Gallery />
      </div>
    </div>
  );
};
export default Home;
