import logo from "./logo.svg";
import "./App.css";
import Navigation from "./shared/components/Navigation";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" exact element={<Navigation />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
