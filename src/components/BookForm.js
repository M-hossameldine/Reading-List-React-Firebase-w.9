import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

// firebase imports
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

export default function BookForm() {
  const [newBook, setNewBook] = useState('');
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    // prevent page reload
    e.preventDefault();

    // create reference to books collections
    const ref = collection(db, 'books');

    // add new book API
    await addDoc(ref, { title: newBook, uid: user.uid });

    // clean form inputs
    setNewBook('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type='text'
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
