import './App.css'
import Greeting from './components/Greeting'
import Player from './components/Player'
import Card from './components/Card'

function App() {
  return (
    <div className="container">
      <h1>My React App</h1>

      <Greeting name="Pratiksha" />
      <Player name="Pratiksha" team="Developer" />

      <Card>
        <p>This is a card component. The content is passed using children</p>
      </Card>
    </div>
  )
}

export default App
