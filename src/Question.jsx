import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [paragraph, setParagraph] = useState(false);

  const toggle = () => {
    setParagraph(!paragraph);
  };
  return (
    <>
      <article className="question">
        <div className="question-container">
          <h4>{title}</h4>
          <button className="toggle" onClick={toggle}>
            {paragraph ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {paragraph && <p>{info}</p>}
      </article>
    </>
  );
};

export default Question;
