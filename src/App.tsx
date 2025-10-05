import "./App.css";
import Hasan from "./components/Hasan";

function App() {
  const Learn = () => {
    alert("Hello Git & GitHub");
    console.log("Hello Git & GitHub");
  };

  return (
    <div>
      <Hasan />
      <h1>Git & GitHub</h1>
      <button onClick={Learn}>Learn More</button>
      <button>Do not Learn</button>
    </div>
  );
}

export default App;
