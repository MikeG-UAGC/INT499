import React, { useState } from 'react';

function StreamList() {
  
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('User input:', input); 
  };

  return (
    <div className="streamlist">
      <h1>StreamList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Stream Name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;
