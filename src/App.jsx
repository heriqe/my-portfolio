import { useState, useEffect } from 'react'
import henriqueImg from './assets/Henrique.jpg'
import './App.css'
import Stack from './components/Stack'
import Projetos from './components/Projetos'
import Habilidades from './components/Habilidades'
import Contato from './components/Contato'
import DarkModeToggle from './components/DarkModeToggle'

const getHeaderStyles = (darkMode) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 24
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    border: darkMode ? '3px solid #6ee7b7' : '3px solid #6366f1',
    boxShadow: darkMode
      ? '0 2px 12px #000a'
      : '0 2px 12px #b6b6b633',
    marginRight: 16,
    objectFit: 'cover'
  },
  name: {
    fontWeight: 900,
    fontSize: 28,
    letterSpacing: 1,
    margin: 0,
    color: darkMode ? '#6ee7b7' : '#6366f1',
    textShadow: darkMode
      ? '0 2px 8px #000a'
      : '0 2px 8px #b6b6b633'
  },
  role: {
    margin: '4px 0 0 0',
    fontSize: 18,
    fontWeight: 500,
    color: darkMode ? '#6ee7b7' : '#6366f1',
    textShadow: darkMode
      ? '0 2px 8px #000a'
      : '0 2px 8px #b6b6b633',
    opacity: 0.85
  }
})

// Header separado
function Header({ darkMode }) {
  const styles = getHeaderStyles(darkMode)
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40,
        position: 'relative'
      }}
    >
      <div style={styles.container}>
        <img
          src={henriqueImg}
          alt="Foto de Henrique"
          style={styles.img}
        />
        <div>
          <h2 tabIndex={0} style={styles.name}>
            Henrique Ferreira da Silva
          </h2>
          <p style={styles.role}>
            Desenvolvedor Fullstack
          </p>
        </div>
      </div>
    </header>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.style.background = darkMode
      ? 'linear-gradient(120deg, #181818 0%, #232526 100%)'
      : 'linear-gradient(120deg, #e0e7ff 0%, #fff 100%)'
    document.body.style.transition = 'background 0.4s'
    return () => {
      document.body.style.background = ''
      document.body.style.transition = ''
    }
  }, [darkMode])

  return (
    <main
      className={`App fade-in ${darkMode ? 'dark' : ''}`}
      style={{
        maxWidth: 700,
        margin: '40px auto',
        padding: 40,
        fontFamily: 'system-ui, sans-serif',
        background: darkMode
          ? 'rgba(24,24,24,0.85)'
          : 'rgba(255,255,255,0.85)',
        color: darkMode ? '#f3f3f3' : '#181818',
        minHeight: '90vh',
        borderRadius: 32,
        boxShadow: darkMode
          ? '0 8px 32px #000a'
          : '0 8px 32px #b6b6b633',
        transition: 'background 0.4s, color 0.4s, box-shadow 0.4s',
        backdropFilter: 'blur(16px) saturate(160%)',
        border: darkMode ? '2px solid #232526' : '2px solid #e0e7ff',
        position: 'relative'
      }}
      aria-label="Página principal do portfólio de Henrique"
    >
      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode(v => !v)} />
      <Header darkMode={darkMode} />
      <Contato darkMode={darkMode}/>
      <Stack darkMode={darkMode} />
      <Habilidades />
      <Projetos darkMode={darkMode} />
    </main>
  )
}

export default App
