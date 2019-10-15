import React from 'react';

export default (props) => (
  <div>
    <section id="experience" className="container black-text">
      <div className="row">
        <div className="col s12">
          <h3>Where I've Worked</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s4"><a href="#qrios-experience" className="active blue-text">Qrios Networks</a></li>
            <li className="tab col s4"><a className="blue-text" href="#premium-jewelry-experience">Premium Jewelry</a></li>
            <li className="tab col s4"><a className="blue-text" href="#bmw-nigeria-experience">BMW Nigeria</a></li>
            <div className="indicator blue" style={{ zIndex: }} />
          </ul>
        </div>
        <div id="qrios-experience" className="col s12">
          <p className="flow-text"><b>Technical Support Analyst @ Qrios</b></p>

        </div>
        <div id="premium-jewelry-experience" className="col s12">Premium Jewelry Experience</div>
        <div id="bmw-nigeria-experience" className="col s12">BMW Nigeria Experience</div>
      </div>
    </section>
  </div>
);
