import React, {useState } from 'react'

function TodoInput(props) {
    const [inputText, setInputText] = useState(''); //inputText use for allow to take value from user and setInputText showing values in input 
    const handleEnterPress = (e)=>{
        if(e.keyCode===13 ){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' 
        placeholder="Enter your todo" 
        value={inputText} // Set input value to the current state
        onChange={e=>{
                setInputText(e.target.value)    // Update state on every input change
            }}
            onKeyDown={handleEnterPress}></input>
        <button className='add-btn' onClick={() => { props.addList(inputText)
            setInputText("")    // Clear input after submission
        }}>+</button>
        {/* <div>{inputText}</div> */}
    </div>
  );
}

export default TodoInput