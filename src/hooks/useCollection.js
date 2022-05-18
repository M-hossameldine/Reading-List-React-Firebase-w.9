import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    //  get collection value and set listener for future changes
    const unsub = onSnapshot(ref, (snapshot) => {
      let result = [];

      // map docs content
      snapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });

      setDocuments(result);
    });

    // on unmount, cleanup firestore collection listener
    return () => {
      unsub();
    };
  }, [c]);

  return { documents };
};
