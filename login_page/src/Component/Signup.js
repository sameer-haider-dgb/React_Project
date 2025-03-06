import React, { useState } from 'react'

const Signup = () => {
  const data ={
    name:"",
    email : "",
    password: ""
  }
  const [inputData, setInputData] = useState(data)
  // console.log(inputData);
  const [msg, setMsg] = useState(false)
  
    const handleInput =(event) => {
      // console.log(event.target.value);
      setInputData({...inputData,[event.target.name]:event.target.value})
    }
    // console.log(inputData);
    const submit=(event) => { 
      event.preventDefault(); // stop auto refresh
      if(!inputData.name || !inputData.email || !inputData.password){
        alert("All fields are Mandatory");
      }
      else{
        setMsg(true)
        setTimeout(() => {
          setMsg(false)
        },4000)
      }
    }
    
  return (
    <form onSubmit={submit} className='container'> 
    <h2>
      { msg ? inputData.name+" - SignUp Successfully" : null}
    </h2>
        <h1>Sign Up</h1>
        <div className='inputs'>
            <input type='text' placeholder='Username' onChange={handleInput} name="name" value={inputData.name}/>
            <input type='email' placeholder='Email' onChange={handleInput} name="email" value={inputData.email} />
            <input type='password' placeholder='Enter Password' onChange={handleInput} name="password" value={inputData.password}/>
        </div>
        <button>Signup</button>
    </form>
  )
}

export default Signup