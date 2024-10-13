import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about our platform and services.</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>

      {showMore && (
        <div>
          <h2>More Information</h2>
          <p>
            Our platform offers a wide range of features for streaming, shopping,
            and entertainment. Stay tuned for more updates!
          </p>
        </div>
      )}
    </div>
  );
}

export default About;
