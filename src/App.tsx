import './App.css'

function App() {

  const Learn = () => {
    alert('Hello Git & GitHub')
    console.log('Hello Git & GitHub')
  }

  return (
    <div>
      <h1>Git & GitHub</h1>
      <button onClick={Learn}>Learn More</button>
      <button>Do not Learn</button>
    </div>
  )
}

export default App
