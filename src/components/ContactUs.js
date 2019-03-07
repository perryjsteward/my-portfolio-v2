import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let styleOverwrite = {
      fontSize: '42px',
      lineHeight: '78px',
    }
    return (
      <section id="contact">
          {/* <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div> */}
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4 style={styleOverwrite}>
                Need something doing or just fancy a chat? <a href="mailto:perryjsteward@gmail.com">Email me.</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}