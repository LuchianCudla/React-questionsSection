import { useState } from "react";
import { questions } from "./questions";
import Question from "./Question";
import "./index.css";

const App = () => {
  const [question] = useState(questions);
  return (
    <div className="container">
      <section className="questions-section">
        <h2>Frequently asked questions</h2>
        {question.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
};

export default App;
