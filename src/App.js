import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { useState } from "react";


function App() {
  const [ contacts,  setContacts] = useState([]);

  const formSub = (data) =>{
    console.log(data);
    setContacts([...contacts, data]);
  } 
  const deleteContact = (id) => {
    let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    })
    setContacts(newContact);
  };
  const favToggle =(id) => {
    let updateContact = contacts.map((singleContact) =>{
      console.log(singleContact);
      return singleContact.id === id ? {...singleContact, fav: !singleContact.fav} : singleContact;
    });
    setContacts(updateContact);
  }
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home formSub={formSub} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle}/>} />
        <Route exact path="/favorite" element={<Favorite contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
