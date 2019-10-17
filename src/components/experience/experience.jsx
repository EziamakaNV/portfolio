import React from 'react';

export default (props) => (
  <div>
    <section id="experience" className="container black-text">
      <div className="row">
        <div className="col s12">
          <h3 className="center">Where I&apos;ve Worked</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s4"><a href="#qrios-experience">Qrios Networks</a></li>
            <li className="tab col s4"><a href="#premium-jewelry-experience">Premium Jewelry</a></li>
            <li className="tab col s4"><a href="#bmw-nigeria-experience">BMW Nigeria</a></li>
          </ul>
        </div>
        <div id="qrios-experience" className="col s12">
          <p className="flow-text"><b>Technical Support Analyst @ Qrios Networks</b></p>
          <p><b>March 2018 - March 2019</b></p>
          <ul className="collection">
            <li className="collection-item">
              <div>
              Proffered a solution which helped the company provide value to a client at no extra cost.
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </div>
            </li>
            <li className="collection-item">
              <div>
              Provide support(API, Network Analysis) to clients on integration with our systems
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </div>
            </li>
            <li className="collection-item">
              <div>
              Tasked to and successfully completed acquiring the basic skills required to become a Full Stack Web Developer.
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div id="premium-jewelry-experience" className="col s12">
          <p className="flow-text"><b>Sales Assisstant @ Premium Jewelry</b></p>
          <p><b>July 2016 - January 2018</b></p>
          <ul className="collection">
            <li className="collection-item">
              <div>
              Attended to customers, advising and answering any queries they had concerning stock availability, details of special offers and prices of products.
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </div>
            </li>
            <li className="collection-item">
              <div>
              Worked on the till handling customer transactions which included the selling and refunding of items.
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div id="bmw-nigeria-experience" className="col s12">
        <p className="flow-text"><b>Service Technician/Intern @ BMW Nigeria</b></p>
          <p><b>July 2013 - August 2014</b></p>
          <ul className="collection">
            <li className="collection-item">
              <div>
              Carried out diagnostics, maintenance and service repairs on BMW vehicles.
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </div>
            </li>
            <li className="collection-item">
              <div>
              Time management, team work skills and comradeship developed while working with fellow interns and senior technicians.
                <a href="#!" className="secondary-content">
                  <i className="material-icons">grade</i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
