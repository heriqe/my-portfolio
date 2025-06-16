import { FaVuejs, FaReact, FaDocker, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBolt } from 'react-icons/fa'

export default function StackSection({ darkMode }) {
  const stack = [
    { icon: <FaReact color="#61dafb" />, name: 'React' },
    { icon: <FaVuejs color="#42b883" />, name: 'Vue.js' },
    { icon: <FaJs color="#f7df1e" />, name: 'JavaScript' },
    { icon: <FaNodeJs color="#3c873a" />, name: 'Node.js' },
    { icon: <FaHtml5 color="#e34c26" />, name: 'HTML5' },
    { icon: <FaCss3Alt color="#1572b6" />, name: 'CSS3' },
    { icon: <FaDocker color="#2496ed" />, name: 'Docker' },
    { icon: <FaBolt color="#ffd62e" />, name: 'Vite' } // Adiciona o Vite
  ]
  return (
    <section aria-labelledby="stack-title">
      <h2 id="stack-title">Stack</h2>
      <div style={{
        display: 'flex',
        gap: 28,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '32px 0'
      }}>
        {stack.map(({ icon, name }) => (
          <div key={name} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 32 }}>{icon}</div>
            <span style={{
              fontSize: 14,
              color: darkMode ? '#b6b6b6' : '#555',
              fontWeight: 600
            }}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}