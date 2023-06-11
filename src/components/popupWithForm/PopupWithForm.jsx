function PopupWithForm ({ name, title, textButton, children, isOpen, onClose }) {
  return (
    <section aria-label="form" className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h3 className="popup__title">{title}</h3>
        <button aria-label="Close" type="button" className="popup__close" onClick={onClose}/>
        <form name={name} className="popup__input" noValidate="">
          {children}
          <button type="submit" className="popup__submit-button">
            {textButton||"Сохранить"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;