import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const questions = [
    {
      question: "¿Qué tipo de aroma prefieres?",
      options: ["Fresco", "Dulce", "Amaderado", "Cítrico", "Floral"],
      comment: "Mmmm... esto huele a aventura 🗡️"
    },
    {
      question: "¿Para qué ocasión quieres este perfume?",
      options: ["Uso diario", "Trabajo", "Una cita", "Momentos especiales", "Solo para mí"],
      comment: "Perfecta elección para brillar ✨"
    },
    {
      question: "¿Qué impresión quieres dejar?",
      options: ["Elegante", "Atrevid@", "Acogedor/a", "Misterios@", "Libre"],
      comment: "Yo también elijo así cuando quiero sentirme poderosa 😏"
    },
    {
      question: "¿Tienes alguna preferencia de género para la fragancia?",
      options: ["Femenina", "Masculina", "Unisex", "Me da igual"],
      comment: "Excelente decisión, me encanta tu estilo 💪"
    },
    {
      question: "¿Cómo te sientes hoy?",
      options: ["Tranquil@", "Enérgic@", "Romántic@", "Soñador/a", "Rebelde"],
      comment: "Esa energía me dice exactamente lo que necesitas 🌸"
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const profiles = {
      "Fresco-Uso diario": {
        name: "Acqua di Giò",
        description: "Un aroma fresco y marino que te acompañará en cada momento del día. Ligero, elegante y perfectamente equilibrado para tu estilo de vida."
      },
      "Dulce-Una cita": {
        name: "Black Opium",
        description: "Seductora y misteriosa, esta fragancia despertará todos los sentidos. Perfecta para noches especiales donde quieres causar una impresión inolvidable."
      },
      "Floral-Momentos especiales": {
        name: "Chanel No. 5",
        description: "El clásico atemporal que nunca pasa de moda. Sofisticada y elegante, habla de tu buen gusto y personalidad refinada."
      },
      default: {
        name: "Dolce & Gabbana Light Blue",
        description: "Una fragancia versátil que se adapta a tu personalidad única. Fresca, moderna y llena de vida, como tú."
      }
    };

    const key = `${answers[0]}-${answers[1]}`;
    return profiles[key] || profiles.default;
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const startTest = () => {
    setShowTest(true);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const resetTest = () => {
    setShowTest(false);
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="enso-circle">
              <span className="kanji">心</span>
            </div>
            <span className="brand-name">Kokoro</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Kokoro: IA con alma</h1>
          <p className="hero-subtitle">Asistentes personales diseñados para conectar con lo que eres.</p>
          <button className="cta-button" onClick={() => scrollToSection('assistants')}>
            Descubre a Kaori
          </button>
        </div>
        <div className="hero-decoration"></div>
      </section>

      {/* Brand Section */}
      <section className="brand-section">
        <div className="container">
          <div className="brand-content">
            <div className="brand-text">
              <h2>Tecnología con corazón</h2>
              <p>Kokoro nace de la unión entre la inteligencia artificial y la belleza de lo que nos hace únicos. Cada asistente es una experiencia personal, diseñada para acompañarte con estilo, empatía y sensibilidad.</p>
            </div>
            <div className="brand-image">
              <img src="https://images.unsplash.com/photo-1615980251529-f31d82558bf1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBibG9zc29tfGVufDB8fHx3aGl0ZXwxNzUyNDM0NjUzfDA&ixlib=rb-4.1.0&q=85" alt="Delicada ilustración japonesa" />
            </div>
          </div>
        </div>
      </section>

      {/* Assistants Section */}
      <section id="assistants" className="assistants-section">
        <div className="container">
          <h2 className="section-title">Nuestros asistentes</h2>
          <div className="kaori-card">
            <div className="kaori-image">
              <img src="/kaori.png" />
            </div>
            <div className="kaori-info">
              <h3>Kaori</h3>
              <p className="kaori-subtitle">La perfumista samurái que te ayuda a descubrir tu esencia.</p>
              <p className="kaori-description">Kaori es amable, divertida y un poco pícara. Te hace preguntas sencillas y con mucho encanto para ayudarte a encontrar el perfume que mejor habla de ti. Deja que tu aroma te defina… y confía en su nariz 🐽</p>
              <button className="cta-button" onClick={startTest}>
                Hacer el test con Kaori
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Test Modal */}
      {showTest && (
        <div className="test-modal">
          <div className="test-content">
            <button className="close-button" onClick={resetTest}>×</button>
            
            {!showResult ? (
              <div className="test-question">
                <div className="kaori-avatar">
                  <img src="https://images.unsplash.com/photo-1545130458-30e492857535?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxzYW11cmFpfGVufDB8fHx3aGl0ZXwxNzUyNDM0NjU5fDA&ixlib=rb-4.1.0&q=85" alt="Kaori" />
                </div>
                <h3>{questions[currentQuestion].question}</h3>
                <div className="question-options">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className="option-button"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <p className="kaori-comment">{questions[currentQuestion].comment}</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <div className="test-result">
                <div className="kaori-avatar">
                  <img src="https://images.unsplash.com/photo-1545130458-30e492857535?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxzYW11cmFpfGVufDB8fHx3aGl0ZXwxNzUyNDM0NjU5fDA&ixlib=rb-4.1.0&q=85" alt="Kaori" />
                </div>
                <h3>¡Perfecto! He encontrado tu aroma ideal</h3>
                <div className="recommendation">
                  <h4>{getRecommendation().name}</h4>
                  <p>{getRecommendation().description}</p>
                </div>
                <p className="kaori-final">Este perfume dice más de ti que mil palabras. ¿Estás list@ para hacerlo tuyo?</p>
                <button className="cta-button" onClick={resetTest}>
                  Hacer otro test
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">TikTok</a>
              <a href="#" className="social-link">Email</a>
            </div>
            <p className="footer-text">Tecnología que entiende cómo eres. Kokoro.</p>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="decoration decoration-1"></div>
      <div className="decoration decoration-2"></div>
      <div className="decoration decoration-3"></div>
    </div>
  );
};

export default App;
