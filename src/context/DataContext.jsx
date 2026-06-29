import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUsers } from '../api/userapi.js';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <DataContext.Provider
      value={{
        users,
        setUsers,
        searchQuery,
        setSearchQuery,
        isCreateOpen,
        setIsCreateOpen,
        isLoading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
