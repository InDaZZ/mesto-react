function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer__copywriting">© 2020 Mesto Russia</p>
      </footer>
      <template id="element-template">
        <div className="element">
          <img src="#" alt="" className="element__image" style={{ color: 'white' }} />
          <div className="element__content">
            <h2 className="element__text"></h2>
            <div className="element__like-container">
              <button type="button" className="element__like"></button>
              <div className="element__like-counter"></div>
            </div>
            <button type="button" className="element__delete"></button>
          </div>
        </div>
      </template>
    </>
  )
};

export default Footer;