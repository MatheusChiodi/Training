import { useEffect, useState } from 'react';
import Header from './components/Header';
import Muscles from './components/Muscles';
import Exercises from './components/Exercises';

export default function App() {
  const [page, setPage] = useState('Musculo');
  const [muscle, setMuscle] = useState('');
  const [exercises, setExercises] = useState([]);

  const nullMuscle = () => {
    setMuscle('');
    setExercises([]);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Header page={page} setPage={setPage} onMuscle={nullMuscle} />

      {page === 'Musculo' && muscle === '' ? (
        <Muscles onMuscle={setMuscle} />
      ) : page === 'Musculo' && muscle !== '' ? (
        <Exercises muscle={muscle} onMuscle={nullMuscle} />
      ) : null}
    </div>
  );
}
