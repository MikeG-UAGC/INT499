import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (!newItem.trim()) return;
    setCartItems([...cartItems, newItem]);
    setNewItem('');
  };

  const handleRemoveItem = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
      <h1>Cart Page</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add to Cart</button>

      {/* Display the cart items */}
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemoveItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
