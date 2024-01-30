import './ServiceCard.css';

export default function ServiceCard(props) {
    return (
        <div className="ServiceCard">
            <img className="ServiceCard__image" src={props?.image} alt="ServiceCard Img"/>
            <span className="ServiceCard__title">{props?.title}</span>
            <a className="ServiceCard__aboutButton" href={props?.linkAbout}>Подробнее</a>
        </div>
    );
}