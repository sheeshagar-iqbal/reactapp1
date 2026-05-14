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