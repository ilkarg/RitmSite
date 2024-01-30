import './Header.css';
import logo from '../../assets/images/logo 1.png';

export default function Header() {
    return (
        <div className="Header">
            <div className="Header__image-block">
                <img className="Header__image-block__image" src={logo} alt=""/>
            </div>
            <div className="Header__content-block">
                <span className="Header__content-block__title">Ремонт компьютеров и их сервисное обслуживание в Омске</span>
                <span className="Header__content-block__content">Наша компания осуществляет диагностику, обслуживание, качественный ремонт компьютеров.</span>
                <span className="Header__content-block__content">Мы работаем в Омске с частными и корпоративными клиентами.</span>
                <span className="Header__content-block__content">Все виды сервиса предлагаются с гарантией.</span>
            </div>
        </div>
    );
}