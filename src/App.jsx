import { Suspense, lazy } from "react";
import "./App.css";
const Home = lazy(() => import("./pages/Home"));
import Courses from "./pages/Courses";
import CourseViewPage from "./pages/CourseViewPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ContactUs from "./components/ContactUs";
import QueryList from "./components/QueryList";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route
            path=""
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route path="courses" element={<Courses />} />
          <Route path="course/:courseName" element={<CourseViewPage />} />

          <Route
            path="contact-us"
            element={<ContactUs className={"mt-20 text-center py-52"} />}
          />
          <Route path="admin" element={<QueryList />} />

          <Route path="*" element={<h1>404 Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
