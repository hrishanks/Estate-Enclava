import React from "react";
import './Fotter.css'
import { HiLocationMarker } from 'react-icons/hi'

const Fotter = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerwidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./images/logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Our Vision is to make all person <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Hrishank Shirodkar</span>
          <span className="secondaryText"><HiLocationMarker color="var(--blue)" size={20} />Goa, Indai. 403802</span>
          <div className="flexCenter f-menu">
            <span>Home</span> 
            <span>Services</span> 
            <span>Product</span>
            <span>Site Map</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fotter;
