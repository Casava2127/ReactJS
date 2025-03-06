// src/App.js
import React from 'react';
import SubscriptionForm from './SubscriptionForm';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <h2>Sử dụng các phần tử HTML h1, p, input và nút để tạo thiết kế sau bằng JSX</h2>
      <SubscriptionForm />
      <h2>Bài tập: Cấp độ 3</h2>
      <h3>Thiết kế thẻ người dùng sau</h3>
      <UserCard />
    </div>
  );
}

export default App;
