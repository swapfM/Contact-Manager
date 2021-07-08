import classes from './ContactList.module.css'
import React from 'react'

const ContactList= (props)=>{
    const contacts = props.contacts;

    function deleteHandler(id){
        console.log(id)
        props.deleteHandler(id)
    }


    return(
        <div className={classes.main}>
          {contacts.map((contact)=>(

              <div key = {contact.id} className={classes.item}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <button onClick={()=>deleteHandler(contact.id)}>delete</button>
          </div> 
          ))}
        </div>
    )
};

export default ContactList;