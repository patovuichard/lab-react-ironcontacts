import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

const initialContacts = contacts.slice(0, 5);

function App() {
  const [actualContacts, setActualContacts] = useState(initialContacts);

  const addActor = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    // console.log(randomActor)
    const contactsClone = [...actualContacts];
    contactsClone.unshift(randomContact);
    setActualContacts(contactsClone);
  };

  const sortByName = () => {
    const contactsClone = [...actualContacts];
    contactsClone.sort((elem2, elem1) => {
      return elem2.name.localeCompare(elem1.name);
    });
    setActualContacts(contactsClone);
  };

  const sortByPopularity = () => {
    const contactsClone = [...actualContacts];
    contactsClone.sort((elem2, elem1) => {
      return elem2.popularity.localeCompare(elem1.popularity);
    });
    setActualContacts(contactsClone);
  };

  const deleteContact = (id) => {
    const filteredArr = actualContacts.filter((eachElem) => {
      if (eachElem.id === id){
        return false
      } else {
        return true
      }
    })
    setActualContacts( filteredArr )
  };

  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={addActor}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emy</th>
          <th>Actions</th>
        </thead>
        {actualContacts.map((elem) => {
          return (

              <tbody key={elem.id}>
                <th>
                  <img src={elem.pictureUrl} alt="pict" width={"100px"} />
                </th>
                <th>{elem.name}</th>
                <th>{Math.round(elem.popularity * 100) / 100}</th>
                <th>{elem.wonOscar === true ? "🏆" : null}</th>
                <th>{elem.wonEmmy === true ? "🏆" : null}</th>
                <th>
                  <button onClick={() => deleteContact(elem.id)}>Delete</button>
                </th>
              </tbody>
            
          );
        })}
      </table>
    </div>
  );
}

export default App;
