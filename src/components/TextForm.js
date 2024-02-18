import React, {useState} from 'react'
// useState is a hook of react

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0)
    
    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        props.showAlert("converted to upperacase","success")
    }
    const handleOnChange = (event)=>{
        const enteredText = event.target.value
        setText(enteredText)
        const realWords = enteredText.split(" ").filter((word)=>{
          if(word.trim().length !== 0 && word.trim().length === word.length){
            return word
          }
          return null
        })
        setCount(realWords.length)
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase())
        props.showAlert("converted to lowercase","success")
    }
    const clearText = ()=>{
        setText("")
        props.showAlert("text cleared","success")
    }
  //   const countWords =()=>{
  //     let words = text.trim().split(/\s+/); // Split text into an array of words using whitespace as delimiter
  // setCount(words.length);
  //   }
  return (
    <>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" 
            style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}}
             value={text} onChange={handleOnChange} placeholder='enter text here' id="myBox" rows="3"/>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={clearText}>clear text</button>

    </div>
    <div className="container my-3">
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>Your text summary</h1>
      <p>{count} words and {text.length} characters</p>
      <p>{(count * (1/150)).toFixed(2)} minutes read</p>
      <h2>{text.length===0?"":"Preview:"}</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </div>
    </>
    
  )
}

