import { useState, useEffect } from 'react'
import henriqueImg from './assets/Henrique.jpg'
import './App.css'
import Stark from './components/Stack'
import Objetivos from './components/Objetivos'
import Projetos from './components/Projetos'
import Habilidades from './components/Habilidades'
import Contato from './components/Contato'
import DarkModeToggle from './components/DarkModeToggle'

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
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 40,
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <img
            src={henriqueImg}
            alt="Foto de Henrique"
            style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              border: darkMode ? '3px solid #6ee7b7' : '3px solid #6366f1',
              boxShadow: darkMode
                ? '0 2px 12px #000a'
                : '0 2px 12px #b6b6b633',
              marginRight: 16,
              objectFit: 'cover'
            }}
          />
          <div>
            <h2 tabIndex={0} style={{
              fontWeight: 900,
              fontSize: 28,
              letterSpacing: 1,
              margin: 0,
              color: darkMode ? '#6ee7b7' : '#6366f1',
              textShadow: darkMode
                ? '0 2px 8px #000a'
                : '0 2px 8px #b6b6b633'
            }}>
              Henrique Ferreira da Silva
            </h2>
            <p style={{
              fontSize: 18,
              color: darkMode ? '#b6b6b6' : '#555',
              margin: '6px 0 0 0',
              fontWeight: 600,
              letterSpacing: 0.5
            }}>
              Desenvolvedor Front-End | React | JavaScript
            </p>
          </div>
        </div>
      </header>
      <Contato darkMode={darkMode}/>
      <Stark darkMode={darkMode} />
      <Objetivos />
      <Projetos />
      <Habilidades />
    </main>
  )
}

export default App
