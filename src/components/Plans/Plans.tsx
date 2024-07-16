import { Ball } from "../../icons/Ball.tsx";
import { Road } from "../../icons/Road.tsx";
import { Tools } from "../../icons/Tools.tsx";
import { Trash } from "../../icons/Trash.tsx";
import {Card} from "../Card/Card.tsx";
import './Plan.css';

export function Plans() {
    const plans = [
        {
            text: "Улучшение Качества Дорог По Всей Области",
            component: <Road />
        },
        {
            text: "Стройка Новых Спортивных Площадок",
            component: <Ball />
        },
        {
            text: "Чистота городов",
            component: <Trash />
        },
        {
            text: "Реставрация Раритетных зданий",
            component: <Tools />
        }
    ]

    return (
        <div className="main-container mt-5" id="plans">
            <h2 className="text-center title">Планы улучшения</h2>

            <div className="d-xl-flex justify-content-between flex-wrap cards-container">
                {plans.map((item) => (
                    <Card text={item.text} component={item.component} />
                ))}
            </div>
        </div>
    );
}