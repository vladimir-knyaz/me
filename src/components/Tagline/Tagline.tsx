import './Tagline.css';
import tagline_img from '../../assets/tagline_img.jpg';

export function Tagline() {
    return (
        <div className="container-tagline">
            <img src={tagline_img} alt="" className="tagline-block"/>
            <h2 className="tagline-text"> « Лучше мы - лучше наша область » </h2>
        </div>
    )
}