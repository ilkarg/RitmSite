import './PopularServices.css';
import ServiceCard from "../serviceCard/ServiceCard";

export default function PopularServices() {
    return (
        <div className="PopularServices">
            <div className="PopularServices__header-block">
                <span className="PopularServices__header-block__header">Популярные услуги по ремонту компьютеров</span>
            </div>
            <div className="PopularServices__cards-block">
                <div className="PopularServices__cards-block__first-line">
                    <ServiceCard image={require("../../assets/images/popularServices/service-card_icon1.png")} title="Ремонт жёстких дисков" linkAbout="#" />
                    <ServiceCard image={require("../../assets/images/popularServices/service-card_icon2.png")} title="Поиск и удаление вирусов" linkAbout="#" />
                    <ServiceCard image={require("../../assets/images/popularServices/service-card_icon3.png")} title="Ремонт блоков питания" linkAbout="#" />
                    <ServiceCard image={require("../../assets/images/popularServices/service-card_icon4.png")} title="Ремонт материнских плат" linkAbout="#" />
                </div>
                <div className="PopularServices__cards-block__second-line">
                    <ServiceCard image={require("../../assets/images/popularServices/service-card_icon5.png")} title="Восстановление данных" linkAbout="#" />
                    <ServiceCard image={require("../../assets/images/popularServices/service-card_icon6.png")} title="Ремонт акустических систем" linkAbout="#" />
                    <ServiceCard image={require("../../assets/images/popularServices/service-card_icon7.png")} title="Установка и настройка ОС" linkAbout="#" />
                </div>
            </div>
        </div>
    );
}