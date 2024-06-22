import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Container } from "./SharedLayout.styled";



const SharedLayout = () => {
    return (       
    <div >
        <Header />
            <main>
                <Container>
                 <Suspense fallback={null}> 
            <Outlet />
         </Suspense> 
                </Container>   
         
        </main>
        <Footer />
    </div>
    );
};

export default SharedLayout;