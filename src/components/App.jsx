import React, { useState } from "react";
import Login from "./Login";
import contacts from "./../Contact";
import Card from "./Card";

function App() {
  const [user, setUser] = useState(null);

  function createCard(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    );
  }

  if (!user) {
    return <Login setUser={setUser} />;
  }

  const listContacts = [user, ...contacts];

  return (
    <div>
      <h1>My Contacts</h1>

      {listContacts.map(createCard)}
    </div>
  );
}

export default App;
