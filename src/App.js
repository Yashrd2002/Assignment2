import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyListPage from "./pages/PropertyListPage";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PropertyListPage />} />
          <Route path="/property/:id" element={<PropertyListPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
