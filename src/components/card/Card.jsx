function Card ({ card, onCardClick }) {
    return (
        <li className="elements__card">
            <img 
                className="elements__item" 
                src={card.link} 
                alt={`Изображение ${card.name}`} 
                onClick={() => onCardClick({name: card.name, link: card.link})}
            />
            <button aria-label="Delete" type="button" className="elements__delete-button" />
            <div className="elements__groupe">
                <h2 className="elements__title">{card.name}</h2>
                <button aria-label="Like" type="button" className="elements__like-button" />
                <span className="elements__counter">{card.likes.length}</span>
            </div>
        </li>
    );
}

export default Card;