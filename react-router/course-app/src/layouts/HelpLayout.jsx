import { NavLink, Outlet } from "react-router";

export default function HelpLayout() {
  return (
    <div id="help-layout">
      <h1>Help Layout</h1>
        <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">FAQ</NavLink>
      </nav>
        <Outlet/>
    </div>
  );
}
