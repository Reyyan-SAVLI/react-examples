import { Link, NavLink, Outlet } from "react-router";

export default function CourseLayout() {
  return (
    <div id="course-layout">
      <h1>Course List</h1>
      <Link to={"create"}>New Course</Link>
        <Outlet/>
    </div>
  );
}
