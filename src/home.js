import carmel from './carmel.jpg';
import { Link } from "react-router-dom";
import details from './data';
import { useState, useEffect } from 'react';

import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

const Home =()=>{
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (email && name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, adress:email, text: name };
          }
          return item;
        })
      );
      setName('');
      setEmail('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), adress: email, text: name };

      setList([...list, newItem]);
      setEmail('');
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

    return<>
        <h2 className='title'>carmel basome</h2>
        <header className="img-section">
          <img src={carmel} alt='carmel-img' className='carmel-img'/>
          <div className='me'>
           <p>
             Hi, <br />
             i'm Carmel Basome, <br />
             i'm 22years old yet and single.<br/>
             I'm born in February, 11/2000
             with parents both congolese
             i'm from bukavu/D.R.Congo,
             i'm 100% congolese.
           </p>
           <p>
            I built this site with purpose of showing the world who I'm and where I came from.
           </p>
           <p>
            I'm pationate in computer code, and with this small built site i'm gonna tell you
            about me with hope that someone will be inspired with this short words.
           </p>
           <p>
            I'm here today, happy of what I'm,  but it's certain that my life story is not like the way people guess
            it may be.  so, please read till the end, 
            i deeply give the complete detail of my life below down the page.
          </p>
        </div>
      </header>
      <div className='detail'>
        {details.map((paragraph)=>{
          const {id, text} = paragraph;
          return(
            <p key={id}>{text}</p>
          )
        })}

<h3 className='form-title'>Please fill the form below</h3>
<section className='section-center'>
      
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input 
            type='text' 
            value={email} 
            placeholder='Email adress'
            onChange={(e) => setEmail(e.target.value)} /><br/>
          <label htmlFor='comment'>Your comment</label>
          <textarea
            type='text'
            className='grocery'
            placeholder='Enter comment'
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br/>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} editItem={editItem} />
        </div>
      )}
    </section>

        <Link to='/about' className='about-comp'>about  me</Link>
      </div>
      </>
}
export default Home;