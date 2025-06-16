import { useState } from "react";
import { FaGithub, FaReact, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";

const projetos = [
  {
    titulo: "Study Better",
    descricao:
      "Plataforma personalizada para ajudar estudantes a se prepararem para vestibulares e concursos, com simulados, cronogramas e conteúdos interativos das principais disciplinas.",
    tecnologias: [
      { icon: <FaReact title="React" color="#61dafb" />, nome: "React" },
      { icon: <FaCss3Alt title="CSS" color="#2965f1" />, nome: "CSS" },
      { icon: <FaJs title="JavaScript" color="#f7df1e" />, nome: "JavaScript" },
    ],
    repo: "https://github.com/Rennan0rei/Projeto-Anual",
  },
  {
    titulo: "ToDo App",
    descricao: "Aplicativo simples de lista de tarefas para organizar atividades diárias.",
    tecnologias: [
      { icon: <FaReact title="React" color="#61dafb" />, nome: "React" },
      { icon: <FaJs title="JavaScript" color="#f7df1e" />, nome: "JavaScript" },
      { icon: <FaCss3Alt title="Styled Components" color="#db7093" />, nome: "Styled Components" },
    ],
    repo: "https://github.com/seuusuario/todo-app",
  },
  {
    titulo: "API de Clima",
    descricao: "API REST para consultar informações meteorológicas de diferentes cidades.",
    tecnologias: [
      { icon: <FaNodeJs title="Node.js" color="#3c873a" />, nome: "Node.js" },
      { icon: <FaJs title="JavaScript" color="#f7df1e" />, nome: "JavaScript" },
    ],
    repo: "https://github.com/seuusuario/clima-api",
  },
];

export default function Projetos({ darkMode }) {
  const [expandido, setExpandido] = useState(null);

  const handleExpandir = (idx) => {
    setExpandido(expandido === idx ? null : idx);
  };

  return (
    <section aria-labelledby="projetos-title" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 id="projetos-title">Projetos</h2>
      <ul
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          listStyle: "none",
          padding: 0,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {projetos.map((projeto, idx) => (
          <li
            key={projeto.titulo}
            style={{
              border: darkMode ? "1px solid #333" : "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "300px",
              background: darkMode ? "#232526" : "#fff",
              color: darkMode ? "#f3f3f3" : "#181818",
              boxShadow: darkMode
                ? "0 2px 8px #000a"
                : "0 2px 8px rgba(0,0,0,0.03)",
              transition: "background 0.4s, color 0.4s, box-shadow 0.4s",
              cursor: "pointer",
              margin: "0 auto",
              textAlign: "center",
            }}
            onClick={() => handleExpandir(idx)}
          >
            <h3 style={{ margin: 0 }}>{projeto.titulo}</h3>
            {expandido === idx && (
              <>
                <p>{projeto.descricao}</p>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", justifyContent: "center" }}>
                  {projeto.tecnologias.map((tec, i) => (
                    <span key={i} title={tec.nome}>
                      {tec.icon}
                    </span>
                  ))}
                </div>
                <a
                  href={projeto.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver repositório de ${projeto.titulo} no GitHub`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginTop: "0.5rem",
                    textDecoration: "none",
                    color: darkMode ? "#6ee7b7" : "#333",
                    fontWeight: 500,
                    transition: "color 0.4s",
                  }}
                  onClick={e => e.stopPropagation()}
                >
                  <FaGithub color={darkMode ? "#6ee7b7" : "#333"} />
                  Repositório
                </a>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}