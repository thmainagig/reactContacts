import React from "react";
import contacts from '../contacts';
import Card from './Card';

function createCard(contact){
    return(
        <Card key={contact.id} name={contact.name} imageURL={contact.imageURL}
        alt={contact.alt} pno={contact.pno} email={contact.email} />
    );
}
function App(){
    return(
        <div>
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}
        </div>
    );
}
// function App() {
//     let cards = [];
//     for(var i=0; i<contacts.length; i++){
//         cards.push(
//             <Card name={contacts[i].name} imageURL={contacts[i].imageURL} alt={contacts[i].alt} pno={contacts[i].pno} email={contacts[i].email} />
//         );
//     }
//   return (
//     <div>
//       <h1 className="heading">My Contacts</h1>
//       {cards}
//     </div>
//   );
// }

export default App;
