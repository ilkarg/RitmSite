import './Guarantees.css';
import Guarantee from "../guarantee/Guarantee";

export default function Guarantees() {
    return (
        <div className="Guarantees">
            <div className="Guarantees__header-block__header">
                <span className="Guarantees__header">После проведения работ мы гарантируем:</span>
            </div>
            <div className="Guarantees__guarantee-block">
                <Guarantee
                    image={require("../../assets/images/guarantees/guarantee_icon1.png")}
                    imageWidth={50}
                    imageHeight={56}
                    content="Быструю загрузку вашего компьютера или ноутбука при включении"
                />
                <Guarantee
                    image={require("../../assets/images/guarantees/guarantee_icon2.png")}
                    imageWidth={70}
                    imageHeight={59}
                    content="Бесперебойную работу установленных программ"
                />
                <Guarantee
                    image={require("../../assets/images/guarantees/guarantee_icon3.png")}
                    imageWidth={80}
                    imageHeight={22}
                    content="Безопасную работу пользователя в сети Интернет"
                />
            </div>
        </div>
    );
}