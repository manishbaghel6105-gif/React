let colors = ["red", "green", "pink", "yellow", "black"];

let user = {
  name : "Manish" ,  
  isonline : true  

}

function printName(){
  console.log(user.name);
}

function App() {
  return (
    <>
      <div>Hello</div>
      <div> Hii</div>
      <p>{5 + 6}</p>
      <p>5 + 6</p>
      <ul>
        {colors.map((color) => {
          return <li>{color}</li>;
        })}
      </ul>
      <p>{user.isonline ? `${user.name} is online` : `${user.name} is offline`}</p>
      <button  className =""  onClick={printName}>Click on Me</button>
      <img src="" alt = "" />
      <br />
    </>
  );
}

export default App;
