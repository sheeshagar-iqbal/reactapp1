import React from 'react'






import Navber from './components/Navber';
import Carousels from './components/Carousel';
import Cards from './components/Card';



function App() {
  return (
    <>
     <Navber/>
     <Carousels/>
     <h1> Our Faculty</h1>
     <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
     <Cards/>
     <Cards/>
     <Cards/>
     <Cards/>

     <div style={{width:'100%' ,height:'300px', backgroundColor:'gray'}}></div>

     </div>



    

    

     

    </>
  )
}

export default App