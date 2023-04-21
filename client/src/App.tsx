import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Chat } from "./scenes/chat/chat";
import { Cuestionario } from "./scenes/cuestionario/cuestionario";
import { Landing } from "./scenes/landing/landing";
import { Tema } from "./scenes/tema/tema";
import { Error } from "./scenes/Error404/error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quest" element={<Cuestionario />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/tema/:id" element={<Tema />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
