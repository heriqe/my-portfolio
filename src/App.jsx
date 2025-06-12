import { useState } from 'react'
import henriqueImg from './assets/Henrique.jpg'
import './App.css'
import Objetivos from './components/Objetivos'
import Projetos from './components/Projetos'
import Habilidades from './components/Habilidades'
import Contato from './components/Contato'

function App() {
  return (
    <main
      className="App"
      style={{
        maxWidth: 700,
        margin: '0 auto',
        padding: 24,
        fontFamily: 'system-ui, sans-serif',
        background: '#fff',
        minHeight: '100vh'
      }}
      aria-label="Página principal do portfólio de Henrique"
    >
      <header style={{ textAlign: 'center' }}>
        <img
          src={henriqueImg}
          alt="Foto de Henrique"
          style={{ width: 100, borderRadius: '50%', marginBottom: 16 }}
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
