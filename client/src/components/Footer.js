import "./FooterStyles.css";
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
         <div className="left">
           <div className="location">
              <FaHome size={30} style={{color:"white", marginRight:"2rem"}}/>
              <div className="footer-text">
                <p>XYZ ROAD </p>
                <p>CITY STATE</p>
                <p>COUNTRY</p>
              </div>
           </div>
           <div className="phone">
           <h4 className="footer-text"><FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/> PHONE NUMBER</h4>
           </div>
         
         <div className="email">
           <a href="#" className="footer-text"><h4><FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>tsfbank@gmail.com</h4></a>
           </div>
           </div>
         <div className="right">
              <div className="social">
              <a href="#" rel="noopener" target="_blank"><FaFacebook className="icon facebook" size={50} style={{ marginRight:"1rem"}}/></a>

              <a href="#" rel="noopener" target="_blank"><FaLinkedin className="icon linkedin" size={50} style={{ marginRight:"1rem"}}/></a>

              <a href="#" rel="noopener" target="_blank"><FaInstagram className="icon instagram" size={50} style={{ marginRight:"1rem"}}/></a>

              <a href="#" rel="noopener" target="_blank"><FaTwitter className="icon twitter" size={50} style={{ marginRight:"1rem"}}/></a>

             
              </div>
         </div>
      </div>
    </div>
  )
}

export default Footer