import React from "react";
import ContactForm from "./../components/ContactForm";
import ContactCard from "./../components/ContactCard";

function Home({formSub, contacts, deleteContact, favToggle}) {
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <ContactForm formSub={formSub}/>
      </div>
      <div className="row">
        {contacts.map((singleContact) => {
          return <ContactCard key={singleContact.id} contact={singleContact} deleteContact={deleteContact} favToggle={favToggle}/>
        })}
      </div>
    </div>
  );
}

export default Home;
