import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chat } from "./scenes/chat/chat";
import { Cuestionario } from "./scenes/cuestionario/cuestionario";
import { Landing } from "./scenes/landing/landing";
import { Tema } from "./scenes/tema/tema";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quest" element={<Cuestionario />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tema/:id" element={<Tema />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
