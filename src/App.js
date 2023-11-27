import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext';
import Layout from './components/layout';
import Results from './components/results';
import LoginForm from './components/header/login';
import Header from './components/header/header';

const AuthenticatedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return element;
};

const App = () => {
  const { isAuthenticated } = useAuth();
  let data = [];

  const loadData = (csvData) => {
    data.splice(0, data.length, ...csvData);
  };

  const handleBack = () => {
    return <Navigate to="/" />;
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<AuthenticatedRoute element={<Layout loadData={loadData} />}/>}/>
          <Route path="/results" element={<AuthenticatedRoute element={<Results data={data} />}/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
