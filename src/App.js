import React from 'react';
import profileImage from './img/research_h.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Researcher H</h2>
      <img src={profileImage} alt="profile-image" />
      <p>ソース</p>
      <p>https://www.youtube.com/watch?v=F8s4Ng-re0E</p>
    </div>
  );
}

export default App;
