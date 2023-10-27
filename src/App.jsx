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

      {page === 'Historico' && sessionData && !selected ? (
        <Days sessionData={sessionData} onSelect={handleSelection} />
      ) : page === 'Historico' && sessionData && selected ? (
        <>
          <div className="w-[30%] min-w-[350px] flex justify-center items-center bg-white mb-[20px] mt-[50px]">
            <div className="w-[100%] mx-auto border rounded-l-[10px] p-[10px]">
              <p>
                {selectDay} - {selectMuscle}
              </p>
            </div>
            <div>
              <button
                className="w-[100%] mx-auto border rounded-r-[10px] p-[10px] hover:bg-[#d6d6d5] transition-all duration-500"
                onClick={() => setSelected(null)}
              >
                Voltar
              </button>
            </div>
          </div>
          <div className="w-[30%] min-w-[350px] h-[350px] overflow-auto">
            {selected.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center w-full mt-[20px]"
              >
                <div className="border rounded-t-[10px] w-full p-2 text-center bg-[#d6d6d5]">
                  <p>{item.exercise}</p>
                </div>
                <div className="flex w-full border justify-between bg-white">
                  <div className="border-r p-2 w-[50%] text-center">
                    <p>Peso Inicial</p>
                    <p>{item.peso1} kg</p>
                  </div>
                  <div className="p-2 w-[50%] text-center">
                    <p>Peso Final</p>
                    <p>{item.peso2}</p>
                  </div>
                </div>
                <div className="flex w-full border justify-between bg-white">
                  <div className="border-r p-2 w-[50%] text-center">
                    <p>Repetições</p>
                    <p>{item.repeticoes}</p>
                  </div>
                  <div className="p-2 w-[50%] text-center">
                    <p>Séries</p>
                    <p>{item.series}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
