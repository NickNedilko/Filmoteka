import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container } from "./SharedLayout.styled";
import { Loader } from "../Loader/Loader";



const SharedLayout = () => {
    return (       
    <div >
        <Header />
            <main>
            <Container>
                 <Suspense fallback={<Loader/>}> 
            <Outlet />
         </Suspense> 
            </Container>   
        </main>
        <Footer />
    </div>
    );
};

export default SharedLayout;