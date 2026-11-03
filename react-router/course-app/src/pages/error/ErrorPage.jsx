import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();
    let title = "Error";
    let message = "An error occured";

    if (error.status === 404) {
        title = "Not Found Error"
        message = "Page Not Found"
    }
    return (
        <div id="error">
            <h1>{title}</h1>
            <p>{message}</p>
            <Link to="/">Home Page</Link>
        </div>
    );
}