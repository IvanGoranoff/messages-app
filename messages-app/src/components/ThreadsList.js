import React, { useState } from 'react';
import Thread from './Thread';
import jsonData from '../services/data.json';

function ThreadsList() {
  const [threads, setThreads] = useState(jsonData.threads);
  const [error, setError] = useState(null);

  return (
    <div>
      {error && <div>Error: {error}</div>}
      {threads.map((thread, index) => (
        <Thread key={index} messages={thread} />
      ))}
    </div>
  );
}

export default ThreadsList;
