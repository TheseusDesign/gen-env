import Card from "../../components/Card/Card";
import './Layouts3.css'

export default function Layout3({ header, subheader, people }) {
    function genCards(peopleObj) {
        const cardList = peopleObj.map((person,index) => <Card key={index} {...person} />);
        return cardList;
    }

    return (
        <section className="Layout3">
            <h2>{header}</h2>
            <p>{subheader}</p>
            {people && (
                <div className="card-array">
                    {genCards(people)}
                </div>
                )}
        </section>
    )
}