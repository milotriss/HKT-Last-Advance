import React from "react";
import "./questionDetail.css";
import PopUp from "../popUp/popUp";
interface Props {
    data:any
}
const QuestionDetail = (props:Props): JSX.Element => {
  return (
    <section className="questionsOverlay">
      <div className="questions">
        <span>Correct Answer</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quas
          deleniti impedit doloribus hic nemo tempora maiores perferendis
          laborum? Porro illo aliquid?
        </p>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button className="next">
            Next Question
        </button>
      </div>
      {/* <PopUp/> */}
    </section>
  );
};

export default QuestionDetail;
