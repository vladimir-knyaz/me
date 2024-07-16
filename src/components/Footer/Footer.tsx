import './Footer.css';
import {Telegram} from "../../icons/Telegram.tsx";
import {VK} from "../../icons/VK.tsx";

export function Footer() {
    return (
        <footer className="mt-5">
            <div className="main-container footer-container d-xl-flex justify-content-evenly align-items-center">

                <div className="d-xl-block d-none">
                    <h1 className="title-footer">
                        Князев
                    </h1>
                    <h1 className="title-footer">
                        Владимир
                    </h1>
                    <h1 className="title-footer">
                        Сергеевич
                    </h1>
                    <h1 className="title-footer-year">2024</h1>
                </div>

                <div className="d-xl-none d-flex">
                    <h1 className="title-footer">
                        Князев
                        Владимир
                        Сергеевич
                    </h1>
                </div>
                <h1 className="title-footer-year d-xl-none d-block">2024</h1>

                <ul className="footer-list mx-0">
                    <div className="d-flex gap-3">
                        <li>
                            <a href="https://t.me/r4a8thug" className="link-footer" target="_blank"><Telegram/></a>
                        </li>
                        <li>
                            <a href="https://vk.com/r4a8thug" className="link-footer" target="_blank"><VK/></a>
                        </li>
                    </div>
                    <li className="mt-4 phone">
                        +7 908 600-98-33
                    </li>
                    <p className="m-0 helper-phone">Для звонков по всей России</p>
                </ul>
            </div>
        </footer>
    );
}