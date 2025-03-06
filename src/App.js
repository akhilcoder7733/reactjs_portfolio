import React, { useEffect } from 'react';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing type
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div style={{ 
      backgroundImage: "linear-gradient(94deg, rgba(30,0,61,1) 12%, rgba(4,19,79,1) 46%, rgba(3,0,55,1) 77%)", 
      padding: 2 
    }}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
