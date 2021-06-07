import React, { useState } from 'react';
import styled from 'styled-components';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';

const GoalsSection = styled.section`
  width: 35rem;
  max-width: 90%;
  margin: 3rem auto;
`;

const GoalsFormSection = styled(GoalsSection)`
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  function addGoalHandler(enteredText) {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  function deleteItemHandler(goalId) {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <GoalsFormSection>
        <CourseInput onAddGoal={addGoalHandler} />
      </GoalsFormSection>
      <GoalsSection>
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </GoalsSection>
    </div>
  );
};

export default App;
