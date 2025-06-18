import React from 'react'

function DarkModeToggle({ darkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
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
        transition: 'background 0.4s, color 0.4s',
        zIndex: 1000, 
        touchAction: 'manipulation', 
      }}
      aria-label="Alternar modo escuro"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}

export default DarkModeToggle