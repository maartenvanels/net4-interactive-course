import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import HomePage from "./pages/HomePage";
import Lecture1Page from "./pages/lectures/Lecture1Page";
import RCCircuitPlotterPage from "./pages/tools/RCCircuitPlotterPage";
// Importeer hier later andere pagina's (lessen, tools)

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Routes binnen de MainLayout */}
        <Route index element={<HomePage />} />{" "}
        {/* index=true betekent dat dit de default is voor "/" */}
        {/* Routes voor lessen */}
        <Route path="lectures/1" element={<Lecture1Page />} />
        {/* Routes voor tools */}
        <Route path="tools/rc-plotter" element={<RCCircuitPlotterPage />} />
      </Route>
      {/* Hier kunnen eventueel routes *buiten* de MainLayout komen */}
    </Routes>
  );
}

export default App;
