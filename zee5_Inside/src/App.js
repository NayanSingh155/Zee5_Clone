import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Allroutes from "./components/routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
