import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data';

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(postId));

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}

export default BlogPost;