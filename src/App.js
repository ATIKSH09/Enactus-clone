import "./App.css";
import Teams from "./components/Teams";
import Home from "./components/Home";
import Events from "./components/Events";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
  ]);

  return (
    <>
      {/* <Home></Home>  */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
