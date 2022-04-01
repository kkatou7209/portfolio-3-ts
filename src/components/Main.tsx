import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, Service } from "./index";

const Main = () => {
  return (
    <>
      <main id='l-main'>
        <div id='l-page'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/service' element={<Service />}/>
          </Routes>
        </div> 
      </main>
    </>
  )
}

export default Main;