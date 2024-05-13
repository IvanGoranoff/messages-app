import React, { useState, useEffect } from 'react';
import Thread from './Thread';

function ThreadsList() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/threads')
      .then(response => {
        if (!response.ok) {  // Handle non-2xx HTTP responses
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setThreads(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch threads:", error);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && threads.map((thread, index) => (
        <Thread key={index} messages={thread} />
      ))}
    </div>
  );
}

export default ThreadsList;
