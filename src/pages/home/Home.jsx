import Menu from '../../components/menu/Menu';
import Header from '../../components/header/Header';
import PopularServices from "../../components/popularServices/PopularServices";
import Guarantees from "../../components/guarantees/Guarantees";
import Footer from "../../components/footer/Footer";

export default function Home() {
    return (
        <div className={"Home"}>
            <Menu />
            <Header />
            <PopularServices />
            <Guarantees />
            <Footer />
        </div>
    );
}