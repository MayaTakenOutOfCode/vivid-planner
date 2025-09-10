import { useState } from 'react'
import './styles/allStyles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='root'>
      <h1 className='text-4xl font-wg-bold flex-col'>Witaj!</h1>
      <footer>
        <p className='text-sm'>To jest wersja deweloperska naszej aplikacji!</p>
      </footer>
    </div>
  )
}

export default App
