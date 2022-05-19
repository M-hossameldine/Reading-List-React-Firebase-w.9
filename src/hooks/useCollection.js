/*
 * Firestore Hook
 * fetch collection data from firestore
 * set listener for any runtime changes in that collection
 */

import { useState, useEffect, useRef } from 'react';

// firebase imports
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q));
    }

    //  get collection value and set listener for future changes
    const unsub = onSnapshot(ref, (snapshot) => {
      let result = [];

      // map docs content
      snapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });

      console.log('result', result);
      setDocuments(result);
    });

    // on unmount, cleanup firestore collection listener
    return () => unsub();
  }, [c, q]);

  return { documents };
};
