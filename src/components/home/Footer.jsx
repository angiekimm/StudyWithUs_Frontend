import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <img
              src="https://see.fontimg.com/api/renderfont4/Ea2l9/eyJyIjoiZnMiLCJoIjoxNTIsInciOjIwMDAsImZzIjo3NiwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYifQ/U1RVRFkgV0lUSCBVUw/valentine.png"
              alt=""
            />
            <p>온라인 스터디 공간입니다.</p>
            <div className="socialIcon">
              <i className="fab fa-facebook-f "></i>
              <i className="fab fa-instagram "></i>
              <i className="fab fa-twitter "></i>
              <i className="fab fa-youtube "></i>
            </div>
          </div>

          {/* <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className="box">
            <h2>Recent Post</h2>
            <div className="text">
              <p> 3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Feb 2022</span>
            </div>
            <div className="text">
              <p> 3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Feb 2022</span>
            </div>
            <div className="text">
              <p> 3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Feb 2022</span>
            </div>
          </div> */}

          <div className="box">
            <h2>Contact Us</h2>

            <div className="icon">
              <i className="fa fa-location-dot"></i>
              <label htmlFor="">Location: 서울 서초구 서초동 1307</label>
            </div>
            <div className="icon">
              <i className="fa fa-phone"></i>
              <label htmlFor="">Phone: +82 2 6666 6666</label>
            </div>
            <div className="icon">
              <i className="fa fa-envelope"></i>
              <label htmlFor="">Email: support@gmail.com</label>
            </div>
          </div>
        </div>

        <div className="legal container">
          <p>Copyright @2022. All rights reserved.</p>
          <label htmlFor="">
            Design & Developed by <span>6조머지?</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
