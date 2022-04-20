import React from "react";
import Contacts from "../contacts";
import Card from "../components/Card";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      email={contact.email}
      imgURL={contact.imgURL}
      phone={contact.phone}
    />
  );
}

function App() {
  return <div>{Contacts.map(createCard)}</div>;
}
export default App;
