import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data';
import Header from './Header';

function HomePage() {
  return (
    <div>
      <Header />
      <h1>My Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;