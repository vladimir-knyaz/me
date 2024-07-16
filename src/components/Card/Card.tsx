import './Card.css';

interface Props {
    component: JSX.Element;
    text: string;
}

export function Card({component, text}: Props) {
    return (
        <div className="d-flex card-container mt-5 gap-3">
            {component}
            <p>{text}</p>
        </div>
    );
}