import { useEffect, useState } from "react";
import api from "../../utils/api.js";
import Card from "../card/Card.jsx";

function Main ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect (() => {
    Promise.all([api.getUserProfileInfo(), api.getInitialCards()])
      .then(([userData, cardData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        cardData.forEach((item) => {
          item.myId = userData._id;
        });
        setCards(cardData);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile content__section-profile">
        <button onClick={onEditAvatar}
          aria-label="Update avatar"
          type="button"
          className="profile__avatar-button"
        >
          <img className="profile__avatar" src={userAvatar} alt="Изображение" />
        </button>
        <div className="profile__info">
          <div className="profile__info-groupe">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile}
              aria-label="Edit profile"
              type="button"
              className="profile__edit-button"
            />
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button onClick={onAddPlace}
          aria-label="Add a foto"
          type="button"
          className="profile__add-button"
        />
      </section>
      <section aria-label="photo gallery" className="elements">
        <ul className="elements__list">
          {cards.map((data) => {
            return (
              <Card card={data} key={data._id} onCardClick={onCardClick}/>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;