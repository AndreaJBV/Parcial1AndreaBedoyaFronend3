import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'

function App() {
  
  return (
    <div className='App'style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <h2>Ingreso de usuario</h2>
      <Form/>
    </div>
  )
}

export default App