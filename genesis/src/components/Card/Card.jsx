import Pic from '../Pic/Pic'
import './Card.css'

export default function Card({ name = "need name", occupation = "need occupation", img }) {
    return (
        <div className="Card">
            {img && <Pic src={img} size="300" />}

            <div className="label">
                <p className="name">{name}</p>
                <p className="occupation">{occupation}</p>
            </div>
        </div>
    )
}