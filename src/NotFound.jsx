import React from 'react'

export default function NotFound({mode}) {
    
  return (
    <div className='my-3' style={{display:"flex", justifyContent:"center",color:mode==="light"?"black":"white"}}>
      OOPS! PAGE NOT FOUND
    </div>
  )
}
