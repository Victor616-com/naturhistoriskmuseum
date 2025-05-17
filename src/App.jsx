import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import './App.css'
import Home from './views/Home';
import Spotlight from './views/Sportlight';

const router = createBrowserRouter([
  {
    path: "/naturhistoriskmuseum/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "second",
        element: <Spotlight />
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
