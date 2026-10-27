import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home";
import CoursesPage, { coursesLoader } from "./pages/course/Courses";
import AboutPage from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import HelpLayout from "./layouts/HelpLAyout";
import ContactPage from "./pages/help/Contact";
import FaqPage from "./pages/help/Faq";
import CourseDetailsPage, {
  courseDetailsLoader,
} from "./pages/course/CourseDetails";
import CourseLayout from "./layouts/CourseLayout";
import CourseCreate from "./pages/course/CourseCreate";
import CourseEdit from "./pages/course/CourseEdit";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      {
        path: "courses",
        element: <CourseLayout />,
        children: [
          { index: true, element: <CoursesPage />, loader: coursesLoader },
          {
            id: "course-details",
            path: ":courseid",
            loader: courseDetailsLoader,
            children: [
              {index: true,element: <CourseDetailsPage />},
              { path: "edit", element: <CourseEdit /> },
            ],
          },
          { path: "create", element: <CourseCreate /> },
        ],
      },

      {
        path: "help",
        element: <HelpLayout />,
        children: [
          { index: true, element: <ContactPage /> },
          { path: "contact", element: <ContactPage /> },
          { path: "faq", element: <FaqPage /> },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
