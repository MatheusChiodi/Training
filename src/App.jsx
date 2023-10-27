import { useState, useEffect } from 'react';
import Header from './components/Header';
import Muscles from './components/Muscles';
import Exercises from './components/Exercises';
import Register from './components/Register';
import Days from './components/Days';

export default function App() {
  const [page, setPage] = useState('Musculo');
  const [muscle, setMuscle] = useState('');
  const [exercise, setExercise] = useState('');
  const [sessionData, setSessionData] = useState(null);


  const nullMuscle = () => {
    setMuscle('');
    setExercise('');
  };

  useEffect(() => {
    const savedData = sessionStorage.getItem('exerciseData');
    if (savedData) {
      setSessionData(JSON.parse(savedData));
    }
  }, [muscle]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Header
        page={page}
        setPage={setPage}
        onMuscle={nullMuscle}
        sessionData={sessionData}
      />

      {page === 'Musculo' && muscle === '' ? (
        <Muscles onMuscle={setMuscle} />
      ) : page === 'Musculo' && muscle !== '' && exercise === '' ? (
        <Exercises
          muscle={muscle}
          onMuscle={nullMuscle}
          onExercise={setExercise}
        />
      ) : page === 'Musculo' && muscle !== '' && exercise !== '' ? (
        <Register onMuscle={nullMuscle} muscle={muscle} exercise={exercise} />
      ) : null}

      {page === 'Historico' && sessionData ? (
        <Days sessionData={sessionData} />
      ) : null}
    </div>
  );
}
