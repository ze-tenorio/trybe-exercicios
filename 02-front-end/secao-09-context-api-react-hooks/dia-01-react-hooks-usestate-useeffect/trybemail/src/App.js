import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const emailList = [{
    id: 1,
    title: 'Título 1',
    status: 0,
  }, {
    id: 2,
    title: 'Título 2',
    status: 0,
  }, {
    id: 3,
    title: 'Título 3',
    status: 0,
  }]
  const [emails, setEmails] = useState(emailList);

  useEffect(() => {
    if (emails.every((email) => email.status === 1)) {
      alert('Parabéns, você leu todos os e-mails');
    }
  }, [emails])

  const setEmailStatus = (emailID, newStatus) => {
    const updatedEmails = emails.map((email) => {
      if (email.id === emailID) {
       return { ...email, status: newStatus };
      };
      return email;
    })

    setEmails(updatedEmails);
  }

  return (
    <div className="App">
      <header>
        <h1>Trybemail</h1>
      </header>
      <main>
        <div>
          <button 
            onClick={ () => setEmails(emails.map((email) => ({
              ...email,
              status: 1,
            }))) }
          >
            Marcar todos como lidos
          </button>
          <button onClick={ () => setEmails(emailList) }>
            Marcar todos como não lidos
          </button>
        </div>

        <div>
          <ul>
            { emails.map((email) => {
              const relativeClass = email.status === 0 ? 'email-unread' : 'email-read';

              return (
                <li key={ email.id }>
                  <span className={ relativeClass }>{ email.title }</span>
                  <button onClick={ () => setEmailStatus(email.id, 1) }>O</button>
                  <button onClick={ () => setEmailStatus(email.id, 0) }>X</button>
                </li>
              )
            }) }
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
