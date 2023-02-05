import { useState } from "react";
import './style.css'

export default function Contacts() {
  const [contacts, setContacts] = useState([])

  function getContacts() {
    fetch('https://c9-firebase-express-depoly.web.app/getall')
      .then(res => res.json())
      .then(doc => {

        setContacts(doc)
      })
      .catch(alert)
  }

  return (
    <>
      <div>
        <article>
          <button onClick={getContacts} className="btn">Get Contacts!</button>
          {contacts ? contacts.map(
            contact => {
              let keys = Object.keys(contact)
              return (<div id="space"> {keys.map(
                key => { if (key != '_id' && key != 'ip_address') return (
                <ul 
                  id="contact_list"><li>{contact[keys]}:{contact[key]}</li>
                </ul>
                ) })}
              </div>
              )
            }) :
            <p>No Emails found</p>
          }
        </article>
      </div>
    </>
  )
}

