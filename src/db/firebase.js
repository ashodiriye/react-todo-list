import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZYnN10rMiYyjrhAXaRBABPOllG0yjFrU",
    authDomain: "todo-list-react-87f61.firebaseapp.com",
    projectId: "todo-list-react-87f61",
    storageBucket: "todo-list-react-87f61.appspot.com",
    messagingSenderId: "127354522430",
    appId: "1:127354522430:web:3ff3dc898d6ae079df3a6f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db