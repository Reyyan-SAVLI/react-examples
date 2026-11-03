import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

export default function MainLayout() {
    return(
        <>
        <div className="container">
        <Navbar />
        <Container sx={{mt: 3}}>
            <Outlet />
        </Container>        
        </div>
        </>
    )
}