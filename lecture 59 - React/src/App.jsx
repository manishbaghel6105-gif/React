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
// console.log(2);

// import Footer from "./components/Footer";
import Body from "./components/Body";
import NewFooter, { Footer as FooterUpdate } from "./components/Footer"; // named import
import Navbar from "./components/Navbar"; // default import
import { Product } from "./components/Product";
import Products from "./components/Products";

const user = {
  name: "Nishant",
  isLoggedIn: true,
};

const products = [
  {
    title: "Nike ka Jutta",
    price: 10922,
  },
  {
    title: "Puma ka Shoes",
    price: 43244,
  },
  {
    title: "Goldstar (Old is Gold)",
    price: 2456,
  },
];

function App() {
  // console.log(3);
  return (
    <div>
      <Navbar user={user} />
      <Products products={products} >
        <p>Products</p>
        <a href="">go to this link</a>
      </Products>
      <Body />
      <FooterUpdate />
    </div>
  );
}

export default App;