import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home";
import CoursesPage from "./pages/Courses";
import AboutPage from "./pages/About";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/courses", element: <CoursesPage /> },
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
