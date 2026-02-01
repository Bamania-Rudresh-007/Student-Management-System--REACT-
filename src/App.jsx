import LogIn from "./components/logIn-SignUp/login-form/LogIn.jsx";
import SignUp from "./components/logIn-SignUp/signup-form/SignUp.jsx";
import Welcome from "./components/Welcome-Page/Welcome.jsx";
import { UsersProvider } from "./data/UsersContext.jsx";

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
  return (
    <UsersProvider>
      <AppContent />
    </UsersProvider>
  );
}

export default App;
