import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* landing page */}
      <div style={{height:'100vh', backgroundImage:'url("/landing.png")',backgroundSize:'cover',backgroundAttachment:'fixed'}}
      className='d-flex justify-content-center align-items-center'>
        <div style={{backgroundColor:'rgba(0,0,0,0.39)'}} className='w-50 p-5 rounded text-light text-center'>
          <h1>Designed To Get Hired. Your Skills, Your Story, Your Next Job - All In One.</h1>
          <Link to={'/steps'} style={{backgroundColor:'#755846'}} className='btn text-light mt-3'>Make your Resume with AI</Link>
        </div>
      </div>
      {/* about page */}
      <div className='container my-5'>
        <h1 className='text-center mb-5'>What's AI rBuilder</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <p style={{textAlign:'justify'}}>An AI rBuilder is a web application that helps users create professional resumes quickly and efficiently using artificial intelligence. Traditional resume creation can be time-consuming and difficult, especially for freshers who may not know the correct format or keywords required for modern recruitment systems.</p>

            <p style={{textAlign:'justify'}}> The system can suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. </p>
            <p style={{textAlign:'justify'}}>The main goal of the AI rBuilder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can edit content, preview their resume, and download it in formats such as PDF.</p>

            <p style={{textAlign:'justify'}}>This type of system is especially useful for students & fresh graduates, who want to create high-quality resumes that increase their chances of getting shortlisted for job interviews.</p>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <img width={'100%'} height={'550px'} src='./resume.png' alt='resume'/>
          </div>
        </div>
      </div>
      {/* banner */}
      <div style={{height:'80vh',backgroundImage:'url("./team.png")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:'fixed'}}>
      </div>
      {/* testimony */}
      <div className='container my-5'>
        <h1 className='text-center mb-5'>Testimony</h1>
        <div className='row align-items-center'>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
              <h5>Trusted by professionals worldwide.</h5>
              <p style={{textAlign:'justify'}}>At rBuilder, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
              <p style={{textAlign:'justify'}}> In fact, users who used rBuilder reported getting hired an average of 48 days faster.</p>
              <p style={{textAlign:'justify'}}>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>         
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-5'>
            <div className='row'>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://img.magnific.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-cheerful-cute-shy-asian-girl-cross-arms-chest-modest-pose-looking-away-as-laughing-smiling-silly-stand-white-background_1258-59330.jpg?semt=ais_hybrid&w=740&q=80' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRam28b1qA_PmhL18OQs-vd-N52Ok305uOLkyZ0g6kKg2AWxOiS2V-fC90&s=10' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgi-7i8X4XwIheI--HnULBGJF6I3QVDT70V8mNbWeJjRZXt_qUEF90VLQ&s=10' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://image.shutterstock.com/image-photo/smiling-portrait-young-asian-man-260nw-2492067901.jpg' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://image.shutterstock.com/image-photo/young-latin-woman-casual-clothing-260nw-2500022355.jpg' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWU8mNsmW5031gmUDHuGg_fW-iDQjDqovQXVmfKCmpKnfnhmb3RJCqpAG&s=10' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://image.shutterstock.com/image-photo/woman-portrait-smile-glasses-closeup-260nw-2468469793.jpg' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMi83NCVg22Ox9X8bZpjcjYVMxgKYr7xigajN9gqjV0CjpT5vFPF-r_Wc&s=10' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://media.gettyimages.com/id/1919265357/photo/close-up-portrait-of-confident-businessman-standing-in-office.jpg?s=612x612&w=gi&k=20&c=ZYglCPHNRUMrI5jwYWfpVR3YZ103qm12tka0Gptqhtk=' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0L3d0fSib69XBPpconqlNW8YRg9ff5i8WuxCpAsjDeY_COT3vn7636Jo&s=10' alt='user'/>
              </div>
              <div className='col-md-3'>
                <img className="img-fluid p-2" src='https://static.boredpanda.com/blog/wp-content/uploads/2019/04/587-5cb5e4c4a4973__700.jpg' alt='user'/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
