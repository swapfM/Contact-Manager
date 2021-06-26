
import React from 'react'

const ContactList= (props)=>{
    const contacts = props.contacts;

    function deleteHandler(id){
        console.log(id)
        props.deleteHandler(id)
    }


    return(
        <>
          {contacts.map((contact)=>(

              <div key = {contact.id}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <button onClick={()=>deleteHandler(contact.id)}>delete</button>
          </div> 
          ))}
        </>
    )
};

export default ContactList;