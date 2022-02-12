import React, { Component } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from '../config/firebase-config';

class App extends Component {
  constructor() {
    super();

    // initialize Firebase
    const firebase = initializeApp(config);
    const firestore = getFirestore(firebase);
  }

  render() {
    return (
      <div>Hello React</div>
    );
  }
}
export default App;