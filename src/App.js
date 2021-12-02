import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase-configure';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data?.docs);
    };
    getUsers();
  }, []);
  return <div className="App"></div>;
}

export default App;
