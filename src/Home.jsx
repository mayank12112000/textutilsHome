import React, { useState,useEffect } from 'react'
import Alert from './Alert'

export default function Home({msg,setMsg,showAlertMsg, mode }) {
    const [text, setText] = useState("")
    const [wordsCount, setWordsCount] = useState(0)
    const [disabled,setDisabled] = useState(true)
    const textColor = { color: mode === "light" ? "black" : "white" }

   
    const handleTextarea = (e) => {
        let enteredText = e.target.value
        setText(enteredText);
    }
    // useeffect is used to ensure the word count is getting return properly
    useEffect(()=>{
        setWordsCount(text.split(/\s+/g).filter(words => words.length !== 0).length)
        if(text.length!==0){
            setDisabled(false)
        }else{setDisabled(true)}
    },[text])

    // handlig clear function
    const handleClear=function(){
        setText("")
        showAlertMsg("text cleared")
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text)
        showAlertMsg("Text copied")
    }
    // handling lowercase functionality
    const handleLower=()=>{
        setText(text.toLowerCase())
        showAlertMsg("Changed to lower case")
    }
    const handleUpper=()=>{
        setText(text.toUpperCase())
        showAlertMsg("Changed to upper case")
    }
    const handlePaste=()=>{
        navigator.clipboard.readText().then(pastedText => {
            setText(pastedText);
        }).catch(error => {
            console.error('Failed to read clipboard contents: ', error);
        });
        showAlertMsg("Pasted")
    }
    return (
        <>
        <div style={{position:"fixed",right:"20px"}}>
        {msg && <Alert msg={msg} setMsg={setMsg}/>}
      </div>
        <div className='container my-5' data-bs-theme={mode} >
            <h1 style={textColor}>Enter Text Here</h1>
            <div style={{ marginRight: "30px" }} className="form-floating" >
                <textarea onChange={handleTextarea} name='text' value={text} style={{ height: "10em" }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label style={textColor} htmlFor="floatingTextarea">Enter text </label>
            </div>
            <div className='features my-3'>
                <button disabled={disabled} onClick={handleUpper} type="button" className="btn btn-primary  ">Upper Case</button>
                <button disabled={disabled} onClick = {handleLower}type="button" className="btn btn-primary m-2">Lower Case</button>
                <button disabled={disabled} onClick = {handleClear}type="button" className="btn btn-primary m-1">Clear</button>
                <button disabled={disabled} onClick = {handleCopy}type="button" className="btn btn-primary m-1">Copy to Clipboard</button>
                <button onClick = {handlePaste}type="button" className="btn btn-primary m-1">Paste</button>
            </div>
            <h2 style={textColor} >Your text summary</h2>
            { <div style={textColor} className='my-3'> {wordsCount} words {text.length} characters</div>}
            {<div style={textColor} className='my-3'>{(wordsCount * (1 / 120)).toFixed(2)} minutes to read</div>}
            {wordsCount!==0 ?<h3 style={textColor} >Priview:</h3>:<h3 style={textColor} >Write something to preview</h3>}
            {wordsCount!==0 && <div style={textColor} >{text}</div>}
            
        </div>
        </>
    )
}
