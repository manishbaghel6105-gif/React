// console.log(2) ;
// function Navbar(){
//   console.log(4) ;
//   return(

//       <ul>
//         <li>section</li>
//           <li>home</li>
//           <li>about</li>
//         <li>contact</li>
//       </ul>

//   )
// }

//{ import footer from "./components/Footer"} this is also
//  correct but we can use named export and import it like
// import Footer from "./components/Footer";
import NewFooter, { Footer as FooterUpdate } from "./components/Footer"; // named import
import Navbar from "./components/Navbar"; // default import

const user = {
  name : manish ,
  isactive : true 
};

const products = [
  {
    id: 1,
    name: "Nike ka Jutta",
    price: 10922
  },
  {
    id: 2,
    name: "Puma ka Shoes",
    price: 43244
  },
  {
    id: 3,
    name: "Goldstar (Old is Gold)",
    price: 2456
  }
];

function App() {
  // console.log(3);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Navbar />
      <div style={{ backgroundColor: "white", color: "black" }}>
   {
    products.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>₹ {product.price}</p>
      </div>
    ))}
      </div>
      <FooterUpdate />
      {/* <NewFooter/> */}
    </div>
  );
}
export default App;
