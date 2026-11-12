// TO-DO LIST *************************************************************************

// import {useState } from "react"

// function  ChillerTodo({todo, del}){

//   return(
//     <div>
//       <p>{todo.name}</p>
//       <button onClick={() => del(todo.id)}>Delete</button>
//     </div>
//   )
  
// }

// function App() {
//   const [count, setCount] = useState(0)
//   const [todos, setTodos] = useState([{
//     id: 1, "name": "React padhna hai"
//   }, {
//     id: 2, "name": "Js Revise karni hai"
//   }
//   ]);

//   function handleDelete(id){
//     setTodos(todos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <>
//       {/* todo application */}
//       <button onClick={() => setCount(count + 1)}>count : {count}</button>

//       {
//         todos.map((items)=>(
//           <ChillerTodo 
//             todo={items}
//             del={handleDelete}
//           />
//         ))
//       }
//     </>
//   )
// }

// export default App




// SHOPPING STORE ********************************************************************

// import { useState } from "react";

// function App() {
//   const [search, setSearch] = useState("");
  

//   const items = [
//     { name: "Apple", price: 100 },
//     { name: "Banana", price: 40 },
//     { name: "Mango", price: 80 },
//     { name: "Orange", price: 60 },
//   ];

//   return (
//     <div>
//       <input
//         placeholder="Search item..."
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {items
//         .filter((item) =>
//           item.name.toLowerCase().includes(search.toLowerCase())
//         )
//         .map((item) => (
//           <p key={item.name}>
//             {item.name} - ₹{item.price}
//           </p>
//         ))}
//     </div>
//   );
// }

// export default App;



// UPDATED SHOPPING STORE ************************************************************

import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const [items, setItems] = useState([
    { name: "Apple", price: 100, stock: 2 },
    { name: "Banana", price: 40, stock: 3 },
    { name: "Mango", price: 80, stock: 1 },
    { name: "Orange", price: 60, stock: 2 },
  ]);

  const [cart, setCart] = useState([]);

  function addToCart(item) {
    if (item.stock === 0) {
      alert("Out of Stock!");
      return;
    }

    // Reduce stock by 1
    setItems(
      items.map((i) =>
        i.name === item.name
          ? { ...i, stock: i.stock - 1 }
          : i
      )
    );

    // Add item to cart or increase its quantity
    const existingItem = cart.find(
      (i) => i.name === item.name
    );

    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([
        ...cart,
        { ...item, quantity: 1 },
      ]);
    }
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Store</h1>

      <input
        placeholder="Search item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Available Items</h2>

      {filteredItems.map((item) => (
        <div key={item.name}>
          <p>
            {item.name} - ₹{item.price}
          </p>

          <p>Stock: {item.stock}</p>

          {item.stock === 0 ? (
            <p>Out of Stock</p>
          ) : (
            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          )}

          <hr />
        </div>
      ))}

      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <p key={item.name}>
            {item.name} - ₹{item.price} × {item.quantity}
            = ₹{item.price * item.quantity}
          </p>
        ))
      )}

      <h3>Total Amount: ₹{total}</h3>
    </div>
  );
}

export default App;
