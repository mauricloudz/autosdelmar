import React from 'react';
import VehicleList from './components/VehicleList';

const App = () => {
  return (
    <div>
      <header>
        {/* Aquí irá el encabezado del sitio web */}
      </header>
      <main>
        <VehicleList />
      </main>
      <footer>
        {/* Aquí irá el pie de página del sitio web */}
      </footer>
    </div>
  );
};

export default App;