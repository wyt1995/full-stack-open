import './App.css';
import { useState } from 'react';

function App() {
  const [goodReview, setGoodReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);
  const [badReview, setBadReview] = useState(0);

  const handleGood = () => {
    setGoodReview(prev => prev + 1);
  }

  const handleNeutral = () => {
    setNeutralReview(prev => prev + 1);
  }

  const handleBad = () => {
    setBadReview(prev => prev + 1);
  }

  return (
    <div className="App">
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <Statistics goodReview={goodReview} neutralReview={neutralReview} badReview={badReview} />
    </div>
  );
}

function Statistics({ goodReview, neutralReview, badReview }) {
  const allReviews = goodReview + neutralReview + badReview;
  const average = ((goodReview - badReview) / allReviews).toFixed(2);
  const positive = (goodReview + neutralReview) / allReviews;
  const percent = `${(positive * 100).toFixed(2)}%`;

  if (allReviews === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={goodReview} />
          <StatisticLine text="neutral" value={neutralReview} />
          <StatisticLine text="bad" value={badReview} />
          <StatisticLine text="all" value={allReviews} />
          <StatisticLine text="avergae" value={average} />
          <StatisticLine text="positive" value={percent} />
        </tbody>
      </table>
    </>
  );
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

export default App;
