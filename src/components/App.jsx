import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Main from "./main/Main.jsx";
import PopupWithForm from "./popupWithForm/PopupWithForm.jsx";
import ImagePopup from "./imagePopup/ImagePopup.jsx";
import { useState } from "react";

function App () {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups () {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  }

  function handleCardClick (card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  return (
    <div className="page__content">
      <div className="root">
        <Header />

        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="username"
            id="input-name"
            type="text"
            placeholder="Имя"
            className="popup__input-text"
            required=""
            minLength={2}
            maxLength={40}
          />
          <span
            id="input-name-error"
            className="popup__error popup__error_visible"
          />
          <input
            name="job"
            id="input-job"
            type="text"
            placeholder="О себе"
            className="popup__input-text"
            required=""
            minLength={2}
            maxLength={200}
          />
          <span
            id="input-job-error"
            className="popup__error popup__error_visible"
          />
        </PopupWithForm>

        <PopupWithForm
          name="add-photo"
          title="Новое место"
          textButton="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}  
        >
          <input
            name="title"
            id="input-place"
            type="text"
            placeholder="Название"
            className="popup__input-text"
            required=""
            minLength={2}
            maxLength={30}
          />
          <span
            id="input-place-error"
            className="popup__error popup__error_visible"
          />
          <input
            name="link"
            id="input-link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input-text"
            required=""
          />
          <span
            id="input-link-error"
            className="popup__error popup__error_visible"
          />
        </PopupWithForm>

        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="linkAvatar"
            id="input-linkAvatar"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input-text"
            required=""
          />
          <span
            id="input-linkAvatar-error"
            className="popup__error popup__error_visible"
          />
        </PopupWithForm>

        <PopupWithForm
          name="card-delete"
          title="Вы уверены?"
          textButton="Да"  
        />

        <ImagePopup
          card={selectedCard}
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
        />
      </div>
    </div>
  );
}

export default App;