import React from 'react'

export default function About({mode}) {
    return (
        <div style={{margin:"auto",width:"90%"}} data-bs-theme={mode==="light"?"light":"dark"} className="accordion my-5" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About Text Utils Web App
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            
                            <li>Responsive</li>
                            <li>Accessible from keyboard keys</li>
                            <li>Routing to different routes</li>
                            <li>Button disable functionality if unnecessary</li>
                            <li>Message popup after a successful task</li>
                            <li>Use of regex expression to count correct number of words</li>
                            <li>Use of conditional elements</li>
                            <li>Copying and pasting from local machine clip board</li>
                            <li>Page not found route will come up if user will try to access random routes</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        About the developer
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            <b className='my-2' style={{display:"flex",justifyContent:"center"}}>Maank Keshari</b>
                            <li>Current position: System Engineer @TCS Mumbai</li>
                            <li>Current role: Front end developer</li>
                            <li>Core skills: HTML, CSS, JavaScript, ES6, Bootstrap, React JS, SQL, GITHUB </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
