import React from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import Category from '../components/Category'
import View from '../components/View'

function HomePage() {
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'> 
     <div className="add-videos">
     <Add/>
     </div>
     <Link to={'/watch-history'} style={{textDecoration:"none", color:"white", fontSize:"30px"}} >Watch History</Link>
    </div>
    <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between' >
 <div className="all-videos col-lg-9">
  <h4 className='mb-5' >All Videos</h4>
  <View/>
 </div>
 <div className="category col-lg-3">
  <Category/>
 </div>
    </div>
    </>
  )
}

export default HomePage