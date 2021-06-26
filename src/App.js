import React, {useState} from 'react'
import Header from './components/Header/Header'
import InputContact from './components/InputContact/InputContact';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './components/ContactList/ContactList'

function App(){
  const [contacts, setContacts] = useState([]);

  const addContactFn= (name,email)=>{
    setContacts([...contacts, {id:uuidv4(), name:name, email:email}]);
    
  }

  const deleteContact = (id)=>{
   
 const temp = [...contacts]

for(var i = 0; i < temp.length; i++) {
  
 if(temp[i].id === id){temp.splice(i,1)
  setContacts(temp)
  break;
 }

  }
    
}

  return(
    <>
    <Header />
    <InputContact addContact = {addContactFn}/>
    <ContactList contacts={contacts} deleteHandler = {deleteContact}/>
    </>
  )
}
export default App;