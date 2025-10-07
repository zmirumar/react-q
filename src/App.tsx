import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 🔹 3 ta sahifa
import Hasan from "./components/Hasan";
import Mirumar from "./components/Mirumar";
import Akbar from "./components/Akbar";
import Navbar from "./Layout/Navbar/Navbar"; // Navbar joylashgan joy

function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        { index: true, element: <Hasan /> }, // bosh sahifa — Hasan Legenda
        { path: "Hasan", element: <Hasan /> },
        { path: "Mirumar", element: <Mirumar /> },
        { path: "Akbar", element: <Akbar /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
