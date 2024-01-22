import './App.css';
import React from 'react';
// import State1 from './Components/State1';
import { Person } from './Components/Person';



function App() {
  return (
    <div>
      {/* <State1/> */}
      <Person
        name = "Kashui"
        email = "kashui@gmail.com"
        age = {21}
        isMarried = {false}
        friends = {["Maya", "Laylah", "Ashley"]}
      />
    </div>
  );
} 


export default App;
