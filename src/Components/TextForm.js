import React, { useState } from 'react';

const TextForm = (props) => {
    const uppercaseClickHandler = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", 'success');
    };
    
    const lowercaseClickHandler = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", 'success');
    };

    const onChangeHandler = (event) =>{
        setText(event.target.value);
    };


    const[text, setText] = useState(''); 

  return (
    <>
        <div className='container my-3' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={onChangeHandler} style={{background: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={uppercaseClickHandler}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={lowercaseClickHandler}>Convert to Lowercase</button>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Mintues to Read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}

export default TextForm