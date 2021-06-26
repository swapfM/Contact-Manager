import React from 'react'
import { useState } from 'react';

const InputContact = (props)=>{
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const validateInput = (e)=>{      
        e.preventDefault();
       
        if(name !== '' && email !== ''){
     props.addContact(name,email);
     setEmail('')
     setName('')
        }
        else {
            alert('error')
        }
        
    }   

    return(
        <>
            <form onSubmit={validateInput}>
                <label>Name
                    <input type="text" name='fname' onChange={(e)=>setName(e.target.value)} value={name}></input>
                </label>
               <br/>
                <label>Email
                    <input type="text" name='femail' onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                </label>
                <button type="submit">Save</button>
            </form>
        </>
    )
};
export default InputContact;