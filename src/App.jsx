import { useState, useEffect } from 'react';
import Header from './components/Header';
import Muscles from './components/Muscles';
import Exercises from './components/Exercises';
import Register from './components/Register';
import Days from './components/Days';
import View from './components/View';

export default function App() {
  const [page, setPage] = useState('Musculo');
  const [muscle, setMuscle] = useState('');
  const [exercise, setExercise] = useState('');
  const [sessionData, setSessionData] = useState(null);
  const [selected, setSelected] = useState(null);
  const [selectDay, setSelectDay] = useState('');
  const [selectMuscle, setSelectMuscle] = useState('');

  const handleSelection = (date, muscle) => {
    setSelectDay(date);
    setSelectMuscle(muscle);
    setSelected(
      sessionData.filter((item) => item.date === date && item.muscle === muscle)
    );
  };

  const nullMuscle = () => {
    setMuscle('');
    setExercise('');
    setSelected('');
    setSelectDay('');
    setSelectMuscle('');
  };

  useEffect(() => {
    const savedData = sessionStorage.getItem('exerciseData');
    if (savedData) {
      setSessionData(JSON.parse(savedData));
    }
  }, [muscle]);

  return (
    <div className="w-full h-screen flex flex-col">
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

      {page === 'Historico' && sessionData && !selected ? (
        <Days sessionData={sessionData} onSelect={handleSelection} />
      ) : page === 'Historico' && sessionData && selected ? (
        <View
          sessionData={selected}
          onSelect={nullMuscle}
          selectDay={selectDay}
          selectMuscle={selectMuscle}
        />
      ) : null}
    </div>
  );
}
