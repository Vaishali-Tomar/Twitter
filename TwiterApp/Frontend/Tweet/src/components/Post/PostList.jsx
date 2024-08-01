import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/postService';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-2xl mb-4">Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="mb-4">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
