import './Bio.css';
import vladimir from '../../assets/vladimir.jpg';

export function Bio() {
    return (
        <div className="mt-4 bio" id="bio">
            <h3 className="text-center title">Личная информация</h3>
            <div className="mt-4 d-flex justify-content-center">
                <div className="bio-wrapper">
                <h4 className="text-center">Князев Владимир Сергеевич</h4>
                <h1 className="text-center">09.10.2009</h1>
                    <div className="d-flex justify-content-center mt-4">
                        <img src={vladimir} alt="Моя фотография" className="bio-img" />
                    </div>
                    <div className="bio-block mt-5">
                        <h5 className="text-center my-text">Я ученик МБОУ гимназии №3 г.Грязи. Занимаюсь волейболом,
                            тяжелой атлетикой. Буду стараться делать лучше как вашу жизнь, так и
                            НАШУ область</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}