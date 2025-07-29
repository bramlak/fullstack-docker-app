import { useEffect, useState } from 'react';
import './App.css';

const emojis = ['👍', '❤️', '😂', '😮', '😢'];

function App() {
  const [reactions, setReactions] = useState({});

  useEffect(() => {
    fetch('/reactions')
      .then(res => res.json())
      .then(data => {
        const map = {};
        data.forEach(row => {
          map[row.emoji] = row.count;
        });
        setReactions(map);
      });
  }, []);

 const react = async (emoji) => {
  try {
    const res = await fetch('/react', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emoji }),
    });

    if (!res.ok) {
      throw new Error('Failed to register reaction');
    }

    setReactions(prev => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1
    }));
  } catch (err) {
    console.error(err);
  }
};

  return (
    <div className="App">
      <h1>React to this!</h1>
      <div className="emoji-container">
        {emojis.map(emoji => (
          <button key={emoji} onClick={() => react(emoji)}>
            {emoji} {reactions[emoji] || 0}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;