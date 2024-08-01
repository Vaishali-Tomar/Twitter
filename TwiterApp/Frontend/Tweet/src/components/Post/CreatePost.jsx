import React, { useState } from 'react';
import { createPost } from '../../services/postService';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ content });
      setContent('');
    } catch (err) {
      setError('Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <textarea
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
