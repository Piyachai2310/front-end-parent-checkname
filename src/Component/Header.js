import React, { useState } from 'react'
import { Link , useLocation  } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
   
    return (
        <div className='container-fiuld' style={{}}>
            <div className='row border-bottom p-3 '>
                <h5>สถานะประจำวันของนักเรียนโครงการ วมว. ปีการศึกษา 2566</h5>
            </div>
            <div className='row p-4 d-flex justify-content-center shadow'>
                <div className=' col-1'> <Link to="/" className= {`${location.pathname === '/'? 'link-dark link-offset-3 link-underline-dark link-underline-opacity-100' : 'link-offset-2 link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'}`} >นักเรียนชาย</Link></div>
                <div className=' col-1'> <Link to="/famale" className= {`${location.pathname === '/famale'? 'link-dark link-offset-3 link-underline-dark link-underline-opacity-100' : 'link-offset-2 link-dark link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'}`} >นักเรียนหญิง</Link></div>
            </div>
        </div>
    )
}

export default Header
