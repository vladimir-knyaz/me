
import './Header.css';

export function Header(){
    return (
        <header className="d-flex justify-content-around">
            <div className="items-header">
                <a href="#bio">Личная Информация</a>
                <a href="#plans">Планы улучшения</a>
                <a href="#questions">Вопросы</a>
            </div>
        </header>
    );
}