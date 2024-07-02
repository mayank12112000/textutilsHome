import React, { useState } from 'react'
import {Link} from "react-router-dom"

export default function Navbar({mode,setMode,handleToggle}) {
   
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><big>Text Utils</big></Link>
                {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
                <div style={{display:"flex"}}>
                    <div className="nav-item">
                        <Link className=" navbar-brand active" aria-current="page" to="/">Home</Link>
                    </div>
                    <div className="nav-item">
                        <Link className=" navbar-brand active" aria-current="page" to="/about">About</Link>
                    </div>
                    </div>
                {/* </ul> */}
                
                <div className="form-check form-switch" >
                    <input className="form-check-input" onChange={handleToggle} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                    <label className="form-check-label" style={{color:mode==="light"?"black":"white"}}  htmlFor="flexSwitchCheckChecked">Dark Mode</label>
                </div>
            </div>
        </nav>
    )
}
