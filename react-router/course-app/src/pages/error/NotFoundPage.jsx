import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div id="error">
            <h1>Page Not Found</h1>
            <Link to="/">Home Page</Link>
        </div>
    );
}