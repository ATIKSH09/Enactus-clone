import "./App.css";
import Teams from "./components/Teams";
import Home from "./components/Home";
import Events from "./components/Events";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AtmosTalk from "./components/Events/AtmosTalk";
import DaanUtsav from "./components/Events/DaanUtsav";
import NGOVisit from "./components/Events/NGOVisit";
import Impactus from "./components/Events/Impactus";
import Medha from "./components/Projects/Medha";   // New Import
import Oorja from "./components/Projects/Oorja";   // New Import
import Vikalp from "./components/Projects/Vikalp"; // New Import
import Tejas from "./components/Projects/Tejas";   // New Import
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Team",
      element: <Teams />,
    },
    {
      path: "/Events",
      element: <Events />,
    },
    {
      path: "/Projects",
      element: <Projects />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/AtmosTalk",
      element: <AtmosTalk />,
    },
    {
      path: "/DaanUtsav",
      element: <DaanUtsav />,
    },
    {
      path: "/NGOVisit",
      element: <NGOVisit />,
    },
    {
      path: "/Impactus",
      element: <Impactus />,
    },
    {
      path: "/Medha",       // New Path for Medha
      element: <Medha />,
    },
    {
      path: "/Oorja",       // New Path for Oorja
      element: <Oorja />,
    },
    {
      path: "/Vikalp",      // New Path for Vikalp
      element: <Vikalp />,
    },
    {
      path: "/Tejas",       // New Path for Tejas
      element: <Tejas />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
