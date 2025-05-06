import React, { useEffect, useState } from 'react';

function LocalStorage() {
  const storedItem = localStorage.getItem('item'); // Correct: use the key directly
  const [item, setItem] = useState(storedItem || ''); // fallback to empty string if null

  useEffect(() => {
    localStorage.setItem('item', item); // Save to same key
  }, [item]);

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)} // Update state on input change
      />
      <p>{item}</p>
    </div>
  );
}

export default LocalStorage;
