import React from 'react';
import UserCard from '../Components/UserCard.jsx';
import { useData } from '../context/DataContext.jsx';

const Dashboard = () => {
  const { users, searchQuery, isLoading, error } = useData();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <div className="px-4 pb-6 pt-32 sm:pt-20">Loading users...</div>;
  }

  if (error) {
    return <div className="px-4 pb-6 pt-32 sm:pt-20">Error loading users.</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-5 pt-32 sm:px-6 sm:pt-20">
      <div className="mb-4 text-left">
        <h1 className="text-xl font-bold text-slate-950 sm:text-2xl">Users</h1>
        <p className="mt-1 text-sm text-slate-500">Manage and view all users</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
