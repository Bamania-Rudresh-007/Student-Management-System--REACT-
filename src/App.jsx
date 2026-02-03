import LogIn from "./components/logIn-SignUp/login-form/LogIn.jsx";
import SignUp from "./components/logIn-SignUp/signup-form/SignUp.jsx";
import Welcome from "./components/Welcome-Page/Welcome.jsx";

function AppContent() {
  return (
    <>
      <SignUp />
      <LogIn />
      <Welcome />
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
