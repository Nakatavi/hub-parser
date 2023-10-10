

import React, { useEffect, useState } from "react";

const Login = ({ onLogin }) => {
  useEffect(() => {
    // Load Google API Client
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id: "1048232016472-mmg8lephb0bilj6m3iol5jb55mofhsr8.apps.googleusercontent.com"
      });
    });
  }, []);
  const handleSignIn = async () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    try {
      const googleUser = await auth2.signIn();
      const profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId());
      console.log("Name: " + profile.getName());
      console.log("Email: " + profile.getEmail());
      // You can send the user data to your server or handle it as needed.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Google Authentication in React</h1>
      <button onClick={handleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default Login;
