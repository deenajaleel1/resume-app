import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import ResumeSteps from './Pages/ResumeSteps'
import UserForm from './Pages/UserForm'
import Downloads from './Pages/Downloads'
import ViewResume from './Pages/ViewResume'
import Pnf from './Pages/Pnf'
import Allresumes from './Pages/Allresumes'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header/>
      {/* setup path */}
      <Routes>
        <Route path='' element={< Home/>}/>
        <Route path='steps' element={< ResumeSteps />}/>
        <Route path='form' element={< UserForm/>}/>
        <Route path='download' element={< Downloads/>}/>
        <Route path='resume/:id/view' element={< ViewResume/>}/>
        <Route path='all-resumes' element={< Allresumes/>}/>
        {/* Redirect to pnf */}
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer/>
      <ToastContainer position="top-right" autoClose={3000} theme="colored"/>
    </>
  )
}

export default App
