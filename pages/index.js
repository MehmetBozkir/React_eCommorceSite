import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TrashIcon from "@/Component/Trash";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  return (
    <>
      <div className="Navbar">
        <h1>Logo</h1>
      </div>
      <div className="Box1">
        <img
          className="Photo"
          src="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/141033-1_large.jpg"
          alt="İphone Photo"
        ></img>
        <h1>İphone 15</h1>
        <button
          className="Select"
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          $10
        </button>
      </div>
      <div className="Box2">
        <img
          className="Photo"
          src="https://images.philips.com/is/image/philipsconsumer/fd14e69c14ae43eebe24ae6800fac6c4?$jpglarge$&wid=1250"
          alt="Coffe mac."
        ></img>
        <h1>Philips Coffe Mac.</h1>
        <button
          className="Select"
          onClick={() => {
            setNumber1(number1 + 1);
          }}
        >
          $15
        </button>
      </div>
      <div className="Box3">
        <img
          className="Photo"
          src="https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/leap-petite-global/dynamic-media/personal-care/308c/primary/400690-01.png?scl=1&fmt=png-alpha"
          alt="Dyson"
        ></img>
        <h1>Dyson Airwrap</h1>
        <button
          className="Select"
          onClick={() => {
            setNumber2(number2 + 1);
          }}
        >
          $20{" "}
        </button>
      </div>
      <div className="Box4">
        <img
          className="Photo"
          src="https://pic.otoyazar.com/wp-content/uploads/2017/08/2018-BMW-M5.jpg"
          alt="Car Photo"
        ></img>
        <h1>Bmw M5</h1>
        <button
          className="Select"
          onClick={() => {
            setNumber3(number3 + 1);
          }}
        >
          $100
        </button>
      </div>
      <div className="Card">
        <h1>Your Cart</h1>
        <hr />
        <h2>PRODUCTS & QUANTITY</h2>
        <p className="Card-item">
          {" "}
          {number} x İphone 15{" "}
          <button
            className="Mybut"
            onClick={() => {
              setNumber(number - 1);
            }}
          >
            -1
          </button>{" "}
        </p>
        <p className="Card-item">
          {" "}
          {number1} x Philips Coffe Mac.{" "}
          <button
            className="Mybut"
            onClick={() => {
              setNumber1(number1 - 1);
            }}
          >
            -1
          </button>{" "}
        </p>

        <p className="Card-item">
          {" "}
          {number2} x Dyson Airwrap{" "}
          <button
            className="Mybut"
            onClick={() => {
              setNumber2(number2 - 1);
            }}
          >
            -1
          </button>{" "}
        </p>
        <p className="Card-item">
          {" "}
          {number3} x Bmw M5{" "}
          <button
            className="Mybut"
            onClick={() => {
              setNumber3(number3 - 1);
            }}
          >
            -1
          </button>{" "}
        </p>
        <hr />
        <h1>Total Price</h1>
        <p>{number * 10 + number1 * 15 + number2 * 20 + number3 * 100} $</p>
      </div>
    </>
  );
}
