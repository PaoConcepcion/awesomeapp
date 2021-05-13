import React, { useState } from "react";
import Sidebar from '../common/Sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import Counter from './Counter/CounterWithHooks';
import NewTask from './NewTask/NewTask';
import { excercisesEnum } from '../../utils/constants';
import './Exercises.css';

const items = [
  { title: 'Counter', id: excercisesEnum.COUNTER },
  { title: 'New Task', id: excercisesEnum.NEWTASK },
];

const Exercises = () => {
  const [actualExercise, setActualExercise] = useState(excercisesEnum.COUNTER);

  const handleChangeExcercise = (newExcercise) => {
    setActualExercise(newExcercise);
  };

  let content = null;
  switch (actualExercise) {
    case excercisesEnum.COUNTER:
      content = (
        <Counter maxValue={15}>
          <span>Hey you!</span>
        </Counter>
      )
      break;
    case excercisesEnum.NEWTASK:
      content = (
        <NewTask />
      )
      break;
    default:
      content = null;
  }

  return (

    <div className="Excercises">
      <Sidebar
        items={items}
        selected={actualExercise}
        onNav={handleChangeExcercise}
      />
      <Container className="mt-2 ml-1">
        {content}
      </Container>

    </div>
  );
}

export default Exercises;


