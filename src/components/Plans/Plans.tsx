import React from "react";
import { Ball } from "../../icons/Ball.tsx";
import { OldPerson } from "../../icons/OldPerson.tsx";
import { Road } from "../../icons/Road.tsx";
import { Tools } from "../../icons/Tools.tsx";
import { Trash } from "../../icons/Trash.tsx";
import {Card} from "../Card/Card.tsx";
import './Plan.css';
import { Eraser } from "../../icons/Eraser.tsx";
import { Tree } from "../../icons/Tree.tsx";
import { Building } from "../../icons/Building.tsx";

interface IPlan {
    text: string;
    component: React.ReactNode;
}

export function Plans() {
    const plans: IPlan[] = [
        {
            text: "Улучшение Качества Дорог По Всей Области",
            component: <Road />
        },
        {
            text: "Строительство новых спортивных и игровых площадок",
            component: <Ball />
        },
        {
            text: "Благоустройство городов и поселков Липецкой области",
            component: <Trash />
        },
        {
            text: "Создание новых рабочих мест",
            component: <Tools />
        },
        {
            text: "Забота о пожилых людях",
            component: <OldPerson />
        },
        {
            text: "Охрана природы Липецкой области",
            component: <Tree />
        },
        {
            text: "Сохранение и восстановление исторических памятников культуры",
            component: <Building />
        },
        {
            text: "Ремонт школ и оснащение их современным оборудованием",
            component: <Eraser />
        }
    ]

    return (
        <div className="main-container mt-5" id="plans">
            <h2 className="text-center title">Планы улучшения</h2>

            <div className="d-xl-flex justify-content-between flex-wrap cards-container">
                {plans.map((item: IPlan) => (
                    <Card text={item.text} component={item.component} />
                ))}
            </div>
        </div>
    );
}