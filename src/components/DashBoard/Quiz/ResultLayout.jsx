import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Maindash from "./Maindash";
import Quiz from "./Quiz";
import StatsPageLow from "./StatsPageLow";
import StatsPageMedium from "./StatsPageMedium";
import StatsPageHigh from "./StatsPageHigh";

 const ResultLayout = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleQuizComplete = (score) => {
    setTotalScore(score);
    setQuizCompleted(true);
  };

  return (
    <div>
      <Switch>
        <Route path="/quiz">
          <Quiz onQuizComplete={handleQuizComplete} />
        </Route>
        <Route path="/stats">
          {quizCompleted ? (
            totalScore <= 20 ? (
              <StatsPageLow />
            ) : totalScore <= 40 ? (
              <StatsPageMedium />
            ) : (
              <StatsPageHigh />
            )
          ) : (
            <Redirect to="/quiz" />
          )}
        </Route>
        <Route path="/">
          <Maindash />
        </Route>
      </Switch>
    </div>
  );
};

export default ResultLayout;
