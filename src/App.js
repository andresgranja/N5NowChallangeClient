import React from 'react';
import LoginForm from './components/forms/LoginForm';
import { requestPermission } from './services/apiService';

const App = () => {
  const handleLogin = async (credentials) => {
    try {
      const response = await requestPermission(credentials);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default App;
