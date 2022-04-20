import { useState } from "react";
import Slider from "./Slider";

const PreQuiz = ({ setPreDone }) => {
  const [showForm, setShowForm] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
        e.preventDefault();
        setPreDone(true);
    }

  return (
    <div className="container">
      {!showForm && (
        <p>
          Et in nisi commodo esse non dolore adipisicing qui aute culpa irure
          cupidatat. Qui pariatur reprehenderit est nostrud officia esse tempor
          dolore occaecat ad id elit.
          <br />
          Consequat consectetur aliquip enim nulla.
        </p>
      )}
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Tee testi</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <p>
            Velit elit culpa ea nisi aliquip consectetur commodo sit quis
            laborum magna Lorem. Deserunt laboris aliquip eu culpa. Mollit
            excepteur ex ex occaecat aliqua in Lorem excepteur?
          </p>
          <span className="range-slider">
          <p className="label">0</p>
          < Slider />
          <p className="label">10</p>
          </span>
          <button type="submit">Lähetä vastaus</button>
        </form>
      )}
    </div>
  );
};

export default PreQuiz;
