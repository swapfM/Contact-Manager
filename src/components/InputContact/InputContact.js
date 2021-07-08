import React from 'react'
import { useState } from 'react';
import classes from './InputContact.module.css'

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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossorigin="anonymous"></link>
            <div className={classes.main}>
                <div className={classes.head}>Create a contact</div>
            <form onSubmit={validateInput} className={classes.formWrap}>
                <label><span className={classes.lblhead}>Name</span>
                    <input type="text" name='fname' onChange={(e)=>setName(e.target.value)} value={name} placeholder="&#xF007;"></input>
                </label>
               <br/>
                <label><span className={classes.lblhead}>Email</span>
                    <input type="text" name='femail' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="&#xF199;"></input>
                </label>
                <button type="submit">Save</button>
            </form>
           
            </div>
        </>
    )
};
export default InputContact;