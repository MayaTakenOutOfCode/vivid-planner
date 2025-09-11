import { useState, useEffect } from 'react'
import './styles/allStyles.css'
import Calendar from './components/Calendar'

function App() {
  // Load theme from localStorage
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <button
        className='btn m-2 text-2xs'
        onClick={() => setDark(d => !d)}
      >
        {dark ? 'Jasny motyw' : 'Ciemny motyw'}
      </button>
      <h1 className='text-4xl font-wg-bold flex-col'>Witaj!</h1>
      <Calendar/>
      <footer>
        <p className='text-sm'>To jest wersja deweloperska naszej aplikacji!</p>
      </footer>
    </>
  )
}

export default App
