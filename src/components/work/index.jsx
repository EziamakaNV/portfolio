import React, { Component } from 'react';
import Works from './work';
import myWorks from '../../data';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="amber accent-3">
        <section id="work" className="">
          <div className="row">
            <div className="col s12">
              <h3 className="white-text center">Stuff I&apos;ve built</h3>
            </div>
          </div>
          <div className="container row">
            {
              myWorks.map((work) => (
                <div key={work.cardTitle + Math.floor(Math.random() * myWorks.length * 100)} className="col s12 m6 l4">
                  <Works
                    cardTitle={work.cardTitle}
                    description={work.description}
                    techList={work.techlist}
                    githubLink={work.githubLink || null}
                    externalLink={work.externalLink || null}
                  />
                </div>
              ))
            }
          </div>
        </section>
      </div>
    );
  }
}
