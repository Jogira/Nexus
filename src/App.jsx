
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Vaporwave } from './components';



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 gradient">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <Vaporwave />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
