import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                  <footer className="page-footer center-on-small-only">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 ml-auto">
                <h5 className="title social-section-title">Social Media</h5>
                <div className="social-section text-md-left">
                  <ul className="text-center">
                    <li>
                      <a href="/#" className="btn-floating  btn-fb waves-effect waves-light">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="btn-floating  btn-ins waves-effect waves-light">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="btn-floating  btn-tw waves-effect waves-light">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="btn-floating  btn-yt waves-effect waves-light">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="btn-floating  btn-li waves-effect waves-light">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="btn-floating  btn-dribbble waves-effect waves-light">
                        <i className="fa fa-dribbble left" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="btn-floating  btn-pin waves-effect waves-light">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="btn-floating  btn-gplus waves-effect waves-light">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <h5 className="title">Delivery</h5>
                <ul>
                  <li>
                    <a href="/#">Store Delivery</a>
                  </li>
                  <li>
                    <a href="/#">Online Delivery</a>
                  </li>
                  <li>
                    <a href="/#">Delivery Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/#">Tracking</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h5 className="title">Need help?</h5>
                <ul>
                  <li>
                    <a href="/#">FAQ</a>
                  </li>
                  <li>
                    <a href="/#">Contact Us</a>
                  </li>
                  <li>
                    <a href="/#">Return Policy</a>
                  </li>
                  <li>
                    <a href="/#">Product Registration</a>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container-fluid">
              © 2016 Copyright:
              <a href="/#"> MDBootstrap.com </a>
            </div>
          </div>
        </footer>
     
            </div>
        );
    }
}

export default Footer;
