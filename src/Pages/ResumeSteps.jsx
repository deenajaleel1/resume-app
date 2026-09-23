import React from 'react'
import { IoDocumentOutline } from "react-icons/io5";
import { RiFileDownloadFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


function ResumeSteps() {
  return (
    <>
      <div style={{minHeight:"90vh"}} className='mt-5'>
        <h1 className='text-center'>Create an ATS friendly resume in minutes with AI</h1>
        <div className='container mt-5'>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <IoDocumentOutline />
              <h4>Add your Details</h4>
              <p>Our AI will generate skills and summary</p>
              <h5>Step-1</h5>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4 rounded p-5 shadow text-center">
              <RiFileDownloadFill />
              <h4>Download your resume</h4>
              <p>Download CV as PDF and start applying</p>
              <h5>Step-2</h5>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <Link to={'/form'} style={{ backgroundColor:'#714a2f'}} className='btn text-light'>LET'S START</Link>
        </div>
      </div>
    </>
  )
}

export default ResumeSteps
