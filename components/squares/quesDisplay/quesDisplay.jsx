import React, { useState } from "react";
import styles from "@/components/squares/quesDisplay/quesDisplay.module.css";

const QuesDisplay = ({ ques }) => {
  const [selectedOption, setSelectedOption] = useState("");

  //   const ques = {
  //     id: 1,
  //     type: "multiple_choice",
  //     question_text: "What is the capital of France?",
  //     options: [
  //       { id: "a", text: "Paris" },
  //       { id: "b", text: "London" },
  //       { id: "c", text: "Rome" },
  //       { id: "d", text: "Berlin" },
  //     ],
  //     correct_answer: "a",
  //   };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.quesBody}>
        <h2 className={styles.questionText}>{ques.question_text}</h2>
        <ul className={styles.optionsList}>
          {ques.options.map((option) => (
            <li key={option.id} className={styles.optionItem}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={handleOptionChange}
                  className={styles.radioInput}
                />
                {option.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuesDisplay;
