import './Card.css';

interface Props {
    component: React.ReactNode;
    text: string;
}

export function Card({component, text}: Props) {
    return (
        <div className="d-flex card-container mt-5 gap-3">
            {component}
            <p className="mx-3">{text}</p>
        </div>
    );
}