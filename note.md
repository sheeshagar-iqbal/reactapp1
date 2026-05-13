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