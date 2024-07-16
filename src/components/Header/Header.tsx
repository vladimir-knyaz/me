import gerb_rf from '../../assets/gerb_rf.png';
import gerb from '../../assets/gerb.png';
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