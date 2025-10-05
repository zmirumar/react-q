import "./App.css";
import Hasan from "./components/Hasan";
import Mirumar from "./components/Mirumar";

function App() {
  const Learn = () => {
    alert("Hello Git & GitHub");
    console.log("Hello Git & GitHub");
  };

  return (
    <div>
      <Hasan />
      <Mirumar />
      <h1>Git & GitHub</h1>
      <button onClick={Learn}>Learn More</button>
      <button>Do not Learn</button>
    </div>
  );
}

export default App;
