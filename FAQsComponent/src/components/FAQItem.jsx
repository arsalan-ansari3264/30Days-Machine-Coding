import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const FAQItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="faq-box">
      <div className="que">
        <button onClick={handleShow}>
          {isShow ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>
        <div className="question">{faq.question}</div>
      </div>
      {isShow && <div className="ans">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
