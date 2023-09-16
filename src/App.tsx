import classes from './App.module.css';
import Home from './components/Home';
function App() {

  return (
  <div className={classes.app}>
    <h1>Buscador GitHub</h1>
    <Home/>
  </div>
  )
}

export default App
