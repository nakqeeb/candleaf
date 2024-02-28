import Feature from "../components/HomeContent/Feature";
import Footer from "../shared/components/Footer/Footer";
import Landing from "../components/HomeContent/Landing";
import Popular from "../components/HomeContent/Popular";
import Products from "../components/HomeContent/Products";
import Testimonials from "../components/HomeContent/Testimonials";

const HomePage = () => {
    return <>
        <Landing />
        <Products />
        <Feature />
        <Testimonials />
        <Popular />
    </>
};

export default HomePage