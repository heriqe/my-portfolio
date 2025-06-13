import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa";

export default function Contato({ darkMode }) {
  return (
    <section aria-labelledby="contato-title" className="contato-section">
      <h2 id="contato-title">Contato</h2>
      <ul className="contato-list">
        <li>
          <a
            href="mailto:hefesi93@gmail.com"
            className="contato-link"
            aria-label="Enviar email"
          >
            <FaEnvelope className="contato-icon" />
            hefesi93@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/heriqe"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-link"
            aria-label="GitHub"
          >
            <FaGithub className="contato-icon" />
            github.com/heriqe
          </a>
        </li>
        <li>
          <a
            href="tel:+5519995211575"
            className="contato-link"
            aria-label="Ligar para 19 99521-1575"
          >
            <FaPhone className="contato-icon" />
            19 99521-1575
          </a>
        </li>
      </ul>
      <style>{`
        .contato-section {
          background: ${darkMode ? "#18181b" : "#f9f9f9"};
          border-radius: 12px;
          padding: 2rem;
          max-width: 400px;
          margin: 2rem auto;
          box-shadow: 0 2px 12px ${darkMode ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.07)"};
        }
        .contato-list {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0 0;
        }
        .contato-link {
          display: flex;
          align-items: center;
          gap: 0.7em;
          font-size: 1.1rem;
          color: ${darkMode ? "#e5e7eb" : "#222"};
          text-decoration: none;
          padding: 0.6em 0.8em;
          border-radius: 8px;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .contato-link:hover, .contato-link:focus {
          background: ${darkMode ? "#312e81" : "#e0e7ff"};
          color: ${darkMode ? "#a5b4fc" : "#1e40af"};
          transform: translateY(-2px) scale(1.03);
        }
        .contato-icon {
          font-size: 1.3em;
          transition: color 0.2s;
        }
        .contato-link:hover .contato-icon,
        .contato-link:focus .contato-icon {
          color: ${darkMode ? "#a5b4fc" : "#6366f1"};
        }
      `}</style>
    </section>
  );
}