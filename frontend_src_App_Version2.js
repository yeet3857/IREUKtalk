import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data.posts));
  }, []);

  const handleRegister = () => {
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then(res => res.json()).then(data => setUser(data.user));
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then(res => res.json()).then(data => setUser(data.user));
  };

  const handlePost = () => {
    fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author: user._id, content })
    }).then(res => res.json()).then(data => setPosts([data.post, ...posts]));
  };

  return (
    <div>
      {!user ? (
        <div>
          <h2>Register / Login</h2>
          <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.username}</h2>
          <input placeholder="What's on your mind?" value={content} onChange={e => setContent(e.target.value)} />
          <button onClick={handlePost}>Post</button>
        </div>
      )}
      <h2>Feed</h2>
      {posts.map(post => (
        <div key={post._id}>
          <strong>{post.author?.username}</strong>: {post.content}
        </div>
      ))}
    </div>
  );
}

export default App;