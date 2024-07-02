import React from 'react'

export default function Alert({msg,setMsg}) {
    return (
        <div style={{width:"120px",padding:"0.35rem"}} className="alert alert-success" role="alert">
            success: {msg}
        </div>
    )
}
