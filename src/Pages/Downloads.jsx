import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllDownloadsResumeAPI } from '../services/allAPI'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Downloads() {
  const[downloadList,setDownloadList] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //used to store all job roles
  const[label,setLabel] = useState([])
  //used to store all download counts
  const[value,setValue] = useState([])
  const colorPalette = ['#2596be','#8e66d9','#137302','#d966bc','#73021d','#d96681']
  const backgroundColor = label.map((value,index)=>colorPalette[index%colorPalette.length])
  const data = {
    labels:label,
    datasets:[{
      label:'downloads',
      data:value,
      backgroundColor
    }]
  }



  useEffect(()=>{
    getAllDownloads()
  },[])

  const getAllDownloads=async()=>{
    const response =await getAllDownloadsResumeAPI()
    //console.log(response)
    if(response.status == "200"){
      setDownloadList(response.data)
      const output={}
      response.data.forEach(item=>{
        const currentJob=item.jobRole
        if(currentJob in output){
          output[currentJob]+=1
        }
        else{
          output[currentJob]=1
        }
      })
      setLabel(Object.keys(output))
      setValue(Object.values(output))
    }
  }

  //console.log(downloadList)
  return (
    <div className='conatiner my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h2>All Downloaded Resume Details</h2>
        <button onClick={handleOpen} style={{backgroundColor:'#714a2f'}} className='btn text-light'>View in Chart</button>
      </div>
      {downloadList&&<p className='my-3 fw-bolder'>Total Downloaded Resumes from our site is<span className='text-danger fs-4'> {downloadList.length}</span></p>}
      <div className='row my-5'>
        {/* duplicate according to download resume count */}
        {
          downloadList.length>0?downloadList.map(resume=>(
        <div  key={resume.id} className='col-lg-4 mb-3'>
          <div style={{ height:'400px'}} className='shadow p-3 rounded'>
            <h6>Review at {resume.timeStamp}</h6>
            <div className='mt-3 text-center'>
              <Link to={`/resume/${resume.resumeId}/view`}><img className='w-100' height={'300px'} src={resume.resumeIMG} alt='download cv'/></Link>
            </div>
          </div>
        </div>
          )):<p>There's no resumes downloaded yet...</p>
        }
      </div>
      {/*modal*/}
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        CV Download Count by Job Role
        </Typography>
        <Box id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="d-flex justify-content-center align-items-center m-5">
            <Pie data={data} />
          </div>
          <p style={{textAlign:'justify'}}>This chart provides an overview of the number of CV downloads associated with different job roles on the website. It helps visualize the demand and engagement for CVs across various career categories, making it easier to identify which job roles attract the highest number of downloads. By comparing download counts across roles, the chart can provide
             useful insights into user preferences and the popularity of different career opportunities on the platform.</p>
        </Box>
      </Box>
    </Modal>
    </div>
  )
}

export default Downloads
