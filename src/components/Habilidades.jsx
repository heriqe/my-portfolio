import PropTypes from 'prop-types'

const defaultSkills = [
  'Comunicação',
  'Trabalho em equipe',
  'Resolução de problemas',
  'Proatividade',
  'Aprendizado rápido',
  'Organização'
]

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  listStyle: 'none',
  padding: 0,
  margin: 0
}

const getSkillStyle = (darkMode) => ({
  background: darkMode ? "#6ee7b7" : "#6366f1",
  color: '#fff',
  padding: '6px 14px',
  borderRadius: 16,
  fontWeight: 500,
  fontSize: 15,
  marginBottom: 8,
  display: 'inline-block'
})

export default function Habilidades({ skills = defaultSkills, darkMode = false }) {
  const skillStyle = getSkillStyle(darkMode)

  return (
    <section aria-labelledby="habilidades-title">
      <h3 id="habilidades-title">Habilidades</h3>
      <ul style={listStyle}>
        {skills.map(skill => (
          <li key={skill} style={skillStyle}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

Habilidades.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  darkMode: PropTypes.bool
}