import React from "react";
import ContactCard from './../components/ContactCard';

function Favorite({ contacts, deleteContact, favToggle }) {
  return (
      <div className="container my-5">
        <div className="row row-col-1 row-col-sm-2 row-col-md-3 g-5">
          {contacts && contacts.map((singleContact) => {
            return (
              singleContact.fav && (
                <ContactCard
                  key={singleContact.id}
                  favToggle={favToggle}
                  deleteContact={deleteContact}
                  contact={singleContact}
                />
              )
            );
          })}
          {contacts.filter((single) => single.fav).length === 0 && (
            <h1>No Favourate Contact</h1>
          )}
        </div>
      </div>
    
  );
}

export default Favorite;
