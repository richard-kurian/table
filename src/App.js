import logo from './logo.svg';
import './App.css';
import data from './mock-data.json';
import { useState } from 'react';
import {nanoid} from 'nanoid'; // lest see if the order of the imports matters
import ReadOnlyRow from './components/ReadOnlyRow';

function App() {

  const[contacts,setContacts]=useState(data);
  const [addFormData,setAddFormData]=useState({

    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
  })

  const handleFormChange=(e)=>{
    e.preventDefault();
    const fieldName=e.target.getAttribute("name");
    const fieldValue=e.target.value;

    const newFormData={...addFormData};
    newFormData[fieldName]=fieldValue;
    setAddFormData(newFormData)
  }

  const handleAddFormSubmit=(e)=>{
    e.preventDefault();

    const newContact={
      id:nanoid(),
      fullName:addFormData.fullName,
      address:addFormData.address,
      phoneNumber:addFormData.phoneNumber,
      email:addFormData.email
    };
    const newContacts=[...contacts,newContact]
    setContacts(newContacts);
  }

  return (
    <div className="App">
     <h1>hi there</h1>
   


    <div className="app-container">

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>(
              <ReadOnlyRow contact={contact}/>
          ))}
          
        </tbody>
      </table>
      <h2> Add table rows</h2>
      <form onSubmit={handleAddFormSubmit}>
            
      <input
        type="text"
        name="fullName"
        required="required"
        placeholder="enter the name.."
        onChange={handleFormChange}
        >
       </input>

        <input
        type="text"
        name="address"
        required="required"
        placeholder="enter an address.."
        onChange={handleFormChange}
        >
       </input>

       <input
        type="text"
        name="phoneNumber"
        required="required"
        placeholder="enter a  number.."
        onChange={handleFormChange}

        >
       </input>

       <input
        type="email"
        name="email"
        required="required"
        placeholder="enter an email"
        onChange={handleFormChange}
        >
       </input>

       <button type="submit">Add</button>
      </form>
    </div>


    </div>
  );
}

export default App;
