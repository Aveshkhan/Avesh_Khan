import './App.css';
import './Responsive.css';
import "boxicons";
import Aos from "aos";
import "aos/dist/aos.css";
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { Portfolio } from './Components/Portfolio';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1500, once: "true", anchorPlacement: "center-center" });
  }, []);

  return (
    <div className="App">
      {
        loading ?

          <div className="preLoader" >
            <BarLoader
              color={"#FB4B02"}
              loading={loading}
              size={30}
              speedMultiplier={0.8}
              width="50%"
              height="3px"

            />
          </div>
          :


          <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </>

      }
    </div>
  );
}

export default App;
