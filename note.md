// const name ='sheeshgar'
// const age =23

// const data = <ul>
//   <li>php</li>
//   <li>oracle</li>
//   <li>java</li>
//   <li>asp</li>
// </ul>
// import Cybrom from "./Cybrom";
// const App=()=>{
//   return (
//     <div>
//     <h1>hello {data} !!!</h1>
//     <Cybrom/>
//     </div>
//   )
// }

// const App=()=>{
//   return (
//     <div>
//     <p>
//     <h1>hello</h1>
//     <h2>hi</h2>
//     </p>
//     <h4>namsakar</h4>
//     </div>
//   )
// }


// const App=()=>{
//   return (
//     <>
//     name: <input type="text"/>
//     <br />   
//     class: <input type="text"/>
//     </>
//   )
// }





// component   ================== =======================
import Header from "./header";
import Data from "./Data";
import Footer from "./Footer";

const App=()=>{
  return(
    <>
    <Header/>
    <hr color="red" />
    <Data/>
    <hr color="red" />
    <Footer/>
    </>
  )
}

export default App;


inline css 





const App=()=>{
  return(
    <>
    <div style={{padding:'100px 300px',borderRadius:'20px' ,border:'2px solid red',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{padding:'60px 180px',borderRadius:'20px' ,border:'2px solid lightgreen',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h2 style={{color:'red',textDecoration:'underline',fontFamily:'arial', fontWeight:'lighter',}}>welcome</h2>
      </div>
    </div>
      
    </>
  )
}

export default App;




<!-- external css ;

 -->

// import './r1.css'

import React from 'react'
import Cybrom from './Cybrom'
import Data from './Data'
import Footer from './Footer'

function App() {
  return (
    <>
    <div className='app'>App</div>
    <Cybrom/>
    <Data/>
    <Footer/>
    </>
  )
}

export default App



<!-- image      ==========================image ======================image -->
import React from 'react'
import myimg1 from './images/img.jpg'
import myimg2 from './images/img2.jpg'
import myimg3 from './images/img3.jpg'

function App() {
  return (
    <>
        <h2> welcome to my app</h2>
        <img src={myimg1} height='200px' width='300px' alt="" />
        <br />
        <img src={myimg2} height='200px' width='300px' alt="" />
        <br />
        <img src={myimg3} height='200px' width='300px' alt="" />

    </>
  )
}

export default App




<!-- rounter    dgdfb==================== -->

import React from 'react'






import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import COntact from './pages/COntact'



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
           <Route path='/' element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path='home' element={<Home/>}/>
           <Route path='about' element={<About/>}/>
           <Route path='contact' element={<COntact/>}/>
           
           </Route>
      </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
   <!--               ================== state managenment (use hook usestate) =========== -->

import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color,setcolor]=useState('bhopal')
       const display=()=>{
        setcolor('green')
       }
  return (
    <>
      <h1>welcom to my app my color: {color}</h1> 
      <button onClick={()=>setcolor ('indore')}>click here</button>
    </>
  )
}

export default App

    <!-- ,,,=============for color changeing============ -->

  <h1 style={{color:color}}>this  {color} color</h1> 
      <button onClick={()=>setcolor ('green')}>green</button>
      <button onClick={()=>setcolor ('blue')}>blue</button>
      <button onClick={()=>setcolor ('pink')}>pink</button>
      <button onClick={()=>setcolor ('yellow')}>yellow</button>



      <!-- count function using usestate -->

      import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const display=()=>{
    if (count<=0){
      alert('count is not less than 0')
    }
    else{
      setCount(count-1)
    }
  }
      
  return (
    <>
      <h1>my count app</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count!=0?count- 1:count)}>decrement</button>
    </>
  )
}

export default App