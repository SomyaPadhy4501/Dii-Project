import './App.css';
import axios from "axios"
import React, {useState} from 'react'

const App = () => {
  const [ First_Name, setFirst_Name] = useState('')
  const [ Last_Name, setLast_Name] = useState('')
  const [ Contact_Number, setNumber] = useState('')
  const [ Email, setEmail] = useState('')
  const [ Street, setStreet] = useState('')
  const [ City, setCity] = useState('')
  const [ State, setState] = useState('')
  const [ Zip_Code, setZip_Code] = useState('')
  const [ Blood_Type, setBlood_Type] = useState('')
  const [ Date_of_Birth, setDate_of_Birth] = useState('')
  const [ Person_Type, setPerson_Type] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8000/create' , {First_Name , Last_Name , Contact_Number , Email , Street , City , State , Zip_Code , Blood_Type , Date_of_Birth , Person_Type})
    .then(res=> {
      console.log(res);
    }).catch(err=> console.log(err));

  }

  return (
    <div className = "form-box">
    
    <form onSubmit={handleSubmit}>
        
        <div className = "field1">
        <label> INFO </label>
        <input placeholder="First Name" onChange={e=> setFirst_Name(e.target.value)}/>        
        <input placeholder="Last Name"onChange={e=> setLast_Name(e.target.value)}/>
        <input placeholder="Contact Number"onChange={e=> setNumber(e.target.value)}/>
        <input placeholder="E-mail"onChange={e=> setEmail(e.target.value)}/>
        <input placeholder="Street"onChange={e=> setStreet(e.target.value)}/>
        <input placeholder="City"onChange={e=> setCity(e.target.value)}/>
        <input placeholder="State"onChange={e=> setState(e.target.value)}/>
        <input placeholder="Zipcode"onChange={e=> setZip_Code(e.target.value)}/>
        <input placeholder="Blood Type"onChange={e=> setBlood_Type(e.target.value)}/>
        <input placeholder="Date of Birth"onChange={e=> setDate_of_Birth(e.target.value)}/>
        <input placeholder="Person Type"onChange={e=> setPerson_Type(e.target.value)}/>
      
        </div>

        <button type = "submit" id= "submitBtn" className = "submitBtn"> Submit</button>
    </form>

</div>
  )
}

export default App