import LogIn from "./components/logIn-SignUp/login-form/LogIn.jsx";
import SignUp from "./components/logIn-SignUp/signup-form/SignUp.jsx";
import Welcome from "./components/Welcome-Page/Welcome.jsx";
import { useState, useEffect } from 'react';

function AppContent() {

    const [ isLogin , setIsLogin ] = useState(false);


    useEffect(() => {
        console.log(isLogin);
    } , [isLogin])

  return (
    <>
      <SignUp  isLogin = {isLogin} setIsLogin = {setIsLogin}/>
      <LogIn />
      <Welcome />
    </>
  );
}

function App() {

  return <AppContent />;
}

export default App;
