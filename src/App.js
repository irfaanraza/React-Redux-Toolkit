import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import SwitchColor from "./Components/SwitchColor";

function App() {
      return (
            <div className='App'>
                  <Profile />
                  <Login />
                  <SwitchColor />
            </div>
      );
}

export default App;
