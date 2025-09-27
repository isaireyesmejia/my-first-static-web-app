import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [mostrarSaludo, setMostrarSaludo] = useState(false);
  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    if (nombre.trim()) {
      setMostrarSaludo(true);
      setContador(contador + 1);
    }
  };

  const resetear = () => {
    setNombre('');
    setApellido('');
    setEdad('');
    setMostrarSaludo(false);
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f2f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>
        ¡Mi Primera App en React! 🚀
      </h1>
      
      <div style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              marginRight: '10px',
              width: '180px',
              marginBottom: '10px'
            }}
          />
          <input
            type="text"
            placeholder="Tu apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              marginRight: '10px',
              width: '180px',
              marginBottom: '10px'
            }}
          />
          <input
            type="number"
            placeholder="Tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              width: '100px',
              marginBottom: '10px'
            }}
          />
        </div>
        
        <div>
          <button
            onClick={manejarClick}
            disabled={!nombre.trim()}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              backgroundColor: nombre.trim() ? '#28a745' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: nombre.trim() ? 'pointer' : 'not-allowed',
              marginRight: '10px',
              transition: 'background-color 0.3s'
            }}
          >
            ¡Saludar! 👋
          </button>
          
          <button
            onClick={resetear}
            style={{
              padding: '12px 25px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Resetear 🔄
          </button>
        </div>
        
        {contador > 0 && (
          <p style={{ marginTop: '15px', color: '#6c757d', fontSize: '14px' }}>
            Has saludado {contador} {contador === 1 ? 'vez' : 'veces'}
          </p>
        )}
      </div>

      {mostrarSaludo && nombre && (
        <div style={{
          backgroundColor: 'white',
          padding: '25px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          display: 'inline-block',
          marginTop: '20px',
          border: '3px solid #28a745'
        }}>
          <h2 style={{ color: '#28a745', margin: 0, fontSize: '24px' }}>
            ¡Hola, {nombre} {apellido}! 🎉
          </h2>
          {edad && (
            <p style={{ color: '#007bff', margin: '10px 0', fontSize: '18px' }}>
              {edad < 18 ? '¡Qué joven!' : edad < 30 ? '¡En la flor de la vida!' : '¡Con experiencia!'} 
              ({edad} años)
            </p>
          )}
          <p style={{ color: '#666', margin: '10px 0 0 0', fontSize: '16px' }}>
            🚀 ¡Bienvenido/a al increíble mundo de React! 🚀
          </p>
          <div style={{ marginTop: '15px' }}>
            <span style={{ 
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)', 
              padding: '5px 10px', 
              borderRadius: '20px', 
              color: 'white',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              ✨ ¡Estás aprendiendo React! ✨
            </span>
          </div>
        </div>
      )}

      <div style={{ marginTop: '40px', color: '#666' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
          🎓 Conceptos de React que estás usando:
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '15px', 
          marginTop: '20px',
          maxWidth: '800px',
          margin: '20px auto'
        }}>
          <div style={{ 
            background: 'white', 
            padding: '15px', 
            borderRadius: '10px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔄</div>
            <strong>Estado (useState)</strong>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>Manejo de datos dinámicos</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '15px', 
            borderRadius: '10px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
            <strong>Eventos</strong>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>onClick, onChange</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '15px', 
            borderRadius: '10px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔀</div>
            <strong>Renderizado Condicional</strong>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>Mostrar/ocultar elementos</p>
          </div>
          <div style={{ 
            background: 'white', 
            padding: '15px', 
            borderRadius: '10px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎨</div>
            <strong>Estilos Dinámicos</strong>
            <p style={{ fontSize: '14px', margin: '5px 0' }}>CSS condicional</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;