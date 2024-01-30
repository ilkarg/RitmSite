import './Guarantee.css';

export default function Guarantee(props) {
    return (
        <div className="Guarantee">
            <img
                className="Guarantee__image"
                src={props?.image}
                width={props?.imageWidth}
                height={props?.imageHeight}
                alt="Guarantee Img"
            />
            <span className="Guarantee__content">{props?.content}</span>
        </div>
    );
}