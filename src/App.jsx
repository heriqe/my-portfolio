import { useState } from 'react'
import henriqueImg from './assets/Henrique.jpg'
import './App.css'
import Objetivos from './components/Objetivos'
import Projetos from './components/Projetos'
import Habilidades from './components/Habilidades'
import Contato from './components/Contato'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <main
      className={`App fade-in ${darkMode ? 'dark' : ''}`}
      style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: 24,
        fontFamily: 'system-ui, sans-serif',
        background: darkMode ? '#181818' : '#fff',
        color: darkMode ? '#f3f3f3' : '#181818',
        minHeight: '100vh',
        transition: 'background 0.4s, color 0.4s'
      }}
      aria-label="Página principal do portfólio de Henrique"
    >
      <button
        onClick={() => setDarkMode((v) => !v)}
        style={{
          position: 'absolute',
          right: 24,
          top: 24,
          background: 'none',
          border: '1px solid #888',
          borderRadius: 20,
          padding: '6px 16px',
          cursor: 'pointer',
          color: darkMode ? '#f3f3f3' : '#181818',
          backgroundColor: darkMode ? '#232323' : '#f3f3f3',
          transition: 'background 0.4s, color 0.4s'
        }}
        aria-label="Alternar modo escuro"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
      <header style={{ textAlign: 'center' }}>
        <img
          src={henriqueImg}
          alt="Foto de Henrique"
          style={{
            width: 100,
            borderRadius: '50%',
            marginBottom: 16,
            boxShadow: darkMode
              ? '0 2px 16px #0008'
              : '0 2px 16px #8882',
            transition: 'box-shadow 0.4s'
          }}
        />
        <h1 tabIndex={0}>Olá, eu sou Henrique!</h1>
      </header>
      <Objetivos />
      <Projetos />
      <Habilidades />
      <Contato />
    </main>
  )
}

export default App
