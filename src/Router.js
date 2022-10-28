import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LinkModal from './LinkModal';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/modal' element={<LinkModal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
