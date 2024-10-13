import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [submittedStreams, setSubmittedStreams] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!input.trim()) {
      setError('Stream name cannot be empty!');
      return;
    }

    // Add the new stream to the list of submitted streams
    setSubmittedStreams([...submittedStreams, input]);
    setInput('');
  };

  return (
    <div>
      <h1>StreamList Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter stream name"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the number of submitted streams */}
      <h2>Submitted Streams: {submittedStreams.length}</h2>
      <ul>
        {submittedStreams.map((stream, index) => (
          <li key={index}>{stream}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
