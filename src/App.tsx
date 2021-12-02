import "./App.css";
import Home from "./pages/Home";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
