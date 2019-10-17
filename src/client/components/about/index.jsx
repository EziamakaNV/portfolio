import React from 'react';
import picture from '../../../../public/images/profile_pic.jpeg';

export default (props) => (
  <div className="blue">
    <section id="about" className="container white-text">
      <div className="row">
        <div className="col s12">
          <h3 className="center">About me</h3>
        </div>
      </div>
      <div className="row">
        <div className="col s12 m6">
          <p className="flow-text">
        Hi there! I'm Emeka, a Full-Stack web developer based in Lagos, Nigeria who enjoys building stuff for the
        web and learning while doing so. I build applications to solve problems and provide value. I also tinker for fun.
          </p>
          <p className="flow-text">
        After gradutating from
            {' '}
            <b>Cardiff University</b>
            {' '}
I served at
            {' '}
            <b>Qrios Networks</b>
            {' '}
where I worked as a Technical Support Engineer.
            I started programming March 2018 and during that time I've taking a Front End Developer course sponsored by
            {' '}
            <b>Google Africa</b>
            {' '}
and
            {' '}
            <b>Udacity</b>
. I was also selected for a two week bootcamp with
            {' '}
            <b>Andela</b>
          </p>
          <p className="flow-text">
              These are the technologies that I've worked with recently:
          </p>
          <div className="row">
            <div className="col s6">
              <ul className="collection">
                <li className="collection-item black-text">
                  <div>
                    MongoDB
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    Express.Js
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    React
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    Node.js
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    Webpack
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s6">
              <ul className="collection">
                <li className="collection-item black-text">
                  <div>
                    Javascript(ES6+)
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    PostGreSQL
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    Git
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    Travis CI
                  </div>
                </li>
                <li className="collection-item black-text">
                  <div>
                    Materialize CSS
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <img src={picture} alt="myself" className="responsive-img" />
        </div>
      </div>
    </section>
  </div>
);
