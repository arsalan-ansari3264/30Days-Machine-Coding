import offerSvg from "../assets/offer.svg";

const Modal = ({ handleClose ,handleOfferAccept }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-icon">
          <i onClick={handleClose} class="ri-close-line"></i>
        </div>

        <div className="crown">
          <i class="ri-vip-crown-line"></i>
        </div>
        <div className="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          repellendus laborum facilis voluptas.
        </div>

        <div className="getOffer">
          <button onClick={handleOfferAccept} className="button">Get Offer</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
