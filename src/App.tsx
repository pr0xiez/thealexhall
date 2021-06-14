import './App.scss';

import Hero from 'layout/Hero';
import Navbar from 'layout/Navbar';

const App = () => {
  return (
    <div className="tah-app">
      {/* Nav */}
      <Navbar></Navbar>

      {/* Hero Section */}
      <Hero></Hero>
    </div>
  );
}

export default App;
