import logo from './logo.svg';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';
import Header from './components/Header';
import ItsTime from './components/ItsTime';
import GetBetter from './components/GetBetter';
import  Stories  from './components/Stories';
import  WhatUsersSay  from './components/WhatUsersSay';
import  FrequentlyQuestions  from './components/FrequentlyQuestions';
import FavoriteTools  from './components/FavoriteTools';

function App() {
  return (
    <div>
      <Header/>
      <ItsTime />
      <GetBetter />
      <Stories />
      <WhatUsersSay />
      <FavoriteTools />
      <FrequentlyQuestions />
      <Footer />
    </div>
  );
}

export default App;