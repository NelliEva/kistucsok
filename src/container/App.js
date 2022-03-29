import React from 'react';
import AppRoutes from '../routes/route';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <>
       <BrowserRouter  >
      <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
