import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  let { id } = useParams();
  return (
    <div>
      <h2>User Detail</h2>
      <p>Details for user ID: {id}</p>
    </div>
  );
}

export default UserDetail;
