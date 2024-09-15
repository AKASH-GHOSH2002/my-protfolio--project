import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";



function App() {
  return (
   <>
   <Header/>
   <Home/>
   <Work/>
   <Timeline/>
   <Services/>
   <Testimonial/>
   <Contact/>
   <Footer/>
   <Toaster/>
   
   
   </>
  );
}

export default App;
