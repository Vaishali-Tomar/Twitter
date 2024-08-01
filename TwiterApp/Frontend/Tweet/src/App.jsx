import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import CreatePost from './components/Post/CreatePost';
import PostList from './components/Post/PostList';
import NotificationList from './components/Notification/NotificationList';
import Profile from './components/User/Profile';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PostList />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/notifications" element={<NotificationList />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
