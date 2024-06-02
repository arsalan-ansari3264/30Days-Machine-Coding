import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import ShowBtn from "./components/ShowBtn";
import OfferAccept from "./components/OfferAccept";
const App = () => {
  const [isShow, setIsShow] = useState(false);
  const [isBtn, setIsBtn] = useState(true);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleShow = () => {
    setIsShow(!isShow);
    setIsBtn(!isBtn);
  };

  const handleOfferAccept = () => {
    setIsOfferAccepted(true);
    setIsShow(false);
    setIsBtn(false);
  };

  const handleClose = () => {
    setIsShow(false);
    setIsBtn(true);
  };
  return (
    <>
      <main>
        {isBtn && <ShowBtn handleShow={handleShow} />}
        {isOfferAccepted && <OfferAccept />}
        {isShow && (
          <Modal
            handleClose={handleClose}
            handleOfferAccept={handleOfferAccept}
          />
        )}
      </main>
    </>
  );
};

export default App;
