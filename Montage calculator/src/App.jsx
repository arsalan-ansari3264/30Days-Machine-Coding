import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [principal, setPrincipal] = useState(0);
  const [Interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [EMI, setEMI] = useState(0);

  const handleChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if (id === "principal") {
      setPrincipal(value);
    } else if (id === "rate") {
      setInterest(value);
    } else {
      setYears(value);
    }
  };

  //* P(r(1+r)^n/((1+r)^n)-1))

  const calculateEMI = () => {
    let r = Interest;
    if (principal && r && years) {
      console.log("first");
      r = r / 12 / 100; //* per month
      const calcPower = Math.pow(1 + r, years * 12);
      const amount = principal * ((r * calcPower) / (calcPower - 1));
      setEMI(Math.round(amount));
    }
  };

  const handleSubmit = () => {
    console.log("Submit");
  };

  useEffect(() => {
    calculateEMI();
  }, [principal, Interest, years]);

  console.log(principal, Interest, years);
  console.log(EMI);
  return (
    <>
      <div className="container">
        <h1>Montage Calculator</h1>

        <main>
          <div className="input_container">
            <div className="principal content">
              <label htmlFor="principal">Principal loan amount</label>
              <div className="input">
                <input onChange={handleChange} type="number" id="principal" />
                <span>₹</span>
              </div>
            </div>
            <div className="rate content">
              <label htmlFor="loan">Interest Rate</label>
              <div className="input">
                <input onChange={handleChange} type="number" id="rate" />
                <span>%</span>
              </div>
            </div>
            <div className="loan content">
              <label htmlFor="principle">Length of loan</label>
              <div className="input">
                <input onChange={handleChange} type="number" id="loan" />
                <span>Yrs</span>
              </div>
            </div>
            <button onClick={handleSubmit}>Calculate</button>
          </div>
          <div className="show_container">
            <div className="box">
              <p>Monthly Payment </p>
              <p>₹{EMI}</p>
              <div className="line"></div>
              <div className="count">
                <div className="term">
                  <span>rate</span>
                  <span>{Interest / 12 / 100}</span>
                </div>
                <div className="payment">
                  <span>No. of payment</span>
                  <span>{years * 12}</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
