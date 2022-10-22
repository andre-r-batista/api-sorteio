import { Routes, Route } from "react-router-dom";
import AppBar from "./components/appBar"; 
import Drawer from "./components/drawer";
import AddAlterarJogador from "./pages/addAlterarJogador";
import GerarTimes from "./pages/gerarTimes";
import Home from "./pages/home";
import Sorteio from "./pages/sorteio"

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Drawer />
      </div>

      <div style={{ flex: "auto" }}>
        <AppBar />
        <div style={{ padding: '12px' }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="sorteio" element={<Sorteio />} />
            <Route path="gerartimes" element={<GerarTimes />} />
            <Route path="jogador/add" element={<AddAlterarJogador />} />
            <Route path="jogador/:id" element={<AddAlterarJogador />} />
          </Routes>
        </div>
      </div>  
    </div>
  )
}
