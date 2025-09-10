import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "#222", color: "white", textAlign: "center", padding: "20px" }}>
      <p style={{ margin: "5px" }}>© 2025 My React App. All rights reserved.</p>
      <p style={{ margin: "5px", marginBottom: '50px' }}>Developed by Rodrigo Almeida</p>
      <div>
        <a
          href="https://github.com/lordrodrigoo"
          style={{ color: "white", padding: "10px", fontSize: "1.8rem" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abrodrigo"
          style={{ color: "white", padding: "10px", fontSize: "1.8rem" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
