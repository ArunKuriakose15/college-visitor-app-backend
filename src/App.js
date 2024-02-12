import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVisitor from './components/AddVisitor';
import ViewVisitor from './components/ViewVisitor';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddVisitor/>} />
        <Route path='/view' element={<ViewVisitor/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
