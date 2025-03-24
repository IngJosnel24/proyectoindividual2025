import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./database/authcontext";
import ProtectedRoute from "./Components/ProtectedRoute"; 
import Login from './Views/Login'
import Encabezado from "./Components/Encabezado";
import Inicio from "./views/Inicio";
import Categorias from "../src/Views/categorias"; //Importación de Categorias
import Productos from "./Views/productos";
import Catalogo from "./Views/catalogo";

import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
            <Encabezado />
            <main>
              <Routes>
                
                <Route path="/" element={<Login />} />
                <Route path="/inicio" element={<ProtectedRoute element={<Inicio />} />} />
                <Route path="/categorias" element={<ProtectedRoute element={<Categorias />} />}/> //Ruta de Categorias protegida
                <Route path="/productos" element={<ProtectedRoute element={<Productos />} />}/>
                <Route path="/catalogo" element={<ProtectedRoute element={<Catalogo />} />}/>

              </Routes>
            </main>
        </Router>
      </AuthProvider>
    </>
  )
}

export default App