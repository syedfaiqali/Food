import React from 'react';
import { images } from '../../constants';
const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{ title }</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
    {/* <h1 className="app__wrapper">The Key To Fine Dinning</h1> */}
  </div>
);

export default SubHeading;
