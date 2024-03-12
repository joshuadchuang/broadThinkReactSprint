import './App.css';
import { Button } from '@mui/material';
import React, { useState } from 'react';

function App() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(0)

  const generatePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'broad',
        body: 'think',
        userId: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setPost([...post, json]);
        setId(id + 1);
        console.log(json);
      });
  }

  const postData = post.map(postItem =>
    <li key={postItem.userId}>
      <p>User: {postItem.userId} Team: {postItem.title}{postItem.body}</p>
    </li>
  )

  return (
    <div className="App">
      <Button variant="contained" onClick={generatePost}>Generate Post</Button>
      <ul>
        {postData}
      </ul>
    </div>
  );
}

export default App;
