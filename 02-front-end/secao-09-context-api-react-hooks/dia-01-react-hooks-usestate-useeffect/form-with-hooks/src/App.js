import './App.css';
import { useState } from 'react';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Nome completo..."
          value={ name } 
          onChange={ ({ target }) => setName(target.value) }
        />

        <input
          type="number"
          placeholder="Idade..."
          value={ age }
          onChange={ ({ target }) => setAge(target.value) }
        />

        <input
          type="text"
          placeholder="Cidade..."
          value={ city }
          onChange={ ({ target }) => setCity(target.value) }
        />

        <label>
          <input
            type="radio"
            name="Módulo"
            value="Fundamentos"
            checked={ module === 'Fundamentos' }
            onChange={ ({ target }) => setModule(target.value) }
          />Fundamentos
        </label>
        <label>
          <input
            type="radio"
            name="Módulo"
            value="Front-end"
            checked={ module === 'Front-end' }
            onChange={ ({ target }) => setModule(target.value) }
          />Front-end
        </label>
        <label>
          <input
            type="radio"
            name="Módulo"
            value="Back-end"
            checked={ module === 'Back-end' }
            onChange={ ({ target }) => setModule(target.value) }
          />Back-end
        </label>
        <label>
          <input
            type="radio"
            name="Módulo"
            value="Ciência da Computação"
            checked={ module === 'Ciência da Computação' }
            onChange={ ({ target }) => setModule(target.value) }
          />Ciência da Computação
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
