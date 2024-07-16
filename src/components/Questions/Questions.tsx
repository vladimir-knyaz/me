import emailjs from '@emailjs/browser';
import './Questions.css';
import {useState} from "react";

export function Questions() {
    const [isSuccess, setIsSuccess] = useState(false);

    const setSuccess = () => {
        setIsSuccess(true);

        setTimeout(() => setIsSuccess(false), 3000);
    }

    const SERVICE_ID: string = "service_23rni36";
    const TEMPLATE_ID: string = "template_lreakh8";
    const PUBLIC_KEY: string = "QE2OZr0p4_3jGVqav";


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    e.target.reset();
                    setSuccess();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSuccess(false);
                },
            );
    };

    return (
        <>
            <form id="questions" className="d-flex justify-content-center mt-5" onSubmit={sendEmail}>
                <div>
                    <h2 className="text-center title">Вопросы</h2>
                    <div className="text-container">
                        <div className="helper-container">
                            <p className="text-center helper">Здесь вы можете написать свой вопрос, на который мы
                                обязательно ответим!</p>
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                        <div>
                            <input type="text" name="email_from" id="emailFrom" placeholder="Ваш почтовый ящик"/>
                            <br/>
                            <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Ваш вопрос"
                                className="mt-3"
                            />
                            <br/>
                            {isSuccess && (
                                <div className="alert alert-success mt-4" role="alert">
                                    Ваш вопрос был успешно отправлен!
                                </div>

                            )}
                            <button className="w-100 form-button">Отправить</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}