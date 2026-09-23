import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <div className="container-fluid" style={{backgroundColor:"black", color:"white"}}>
        <div className='row p-5' >
          <div className='col-12 col-md-4'>
            <h3 className='ms-5 fw-bold'>AI rBuilder</h3>
            <p style={{ textAlign: "justify" }} className='ms-5'>An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.</p>
          </div>

          <div className='col-12 col-md-4'></div>

          <div  className='col-12 col-md-4'>
            <h4 className='mb-4 fw-bold'>Contact Us</h4>
            <h6 className='mb-3'><MdEmail /> resumebuilder@gmail.com</h6>
            <h6 className='mb-3'><IoCall /> 9087654321</h6>
            <h5 className='mb-4 fw-bold'>Connect With Us</h5>
           <div className='d-flex gap-4'>
             <FaInstagram />  
             <FaFacebook /> 
              <FaWhatsapp />

           </div>
          </div>


          <h6 className='text-center mt-3'>Designed & built with ❤️ using React</h6>

        </div>
      </div>
    </div>
  )
}

export default Footer
