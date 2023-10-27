import { faXing } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

export default function Register({ onMuscle, muscle, exercise }) {
  const [peso1, setPeso1] = useState('');
  const [peso2, setPeso2] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [series, setSeries] = useState('');
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const savedData = sessionStorage.getItem('exerciseData');
    if (savedData) {
      setDataList(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (peso1 && peso2 && repeticoes && series) {
      document.getElementById('save').classList.remove('hidden');
    } else {
      document.getElementById('save').classList.add('hidden');
    }
  }, [peso1, peso2, repeticoes, series]);

  const handleSave = () => {
    // pegue o dia atual
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    const date = `${day}/${month}/${year}`;

    const x = Math.random() * 1000;
    const y = Math.random() * 1000;

    const id = (x * y + day + month + year).toString();

    const newData = {
      muscle,
      exercise,
      peso1,
      peso2,
      repeticoes,
      series,
      date,
      id,
    };
    const updatedDataList = [...dataList, newData];
    setDataList(updatedDataList);

    // Salve o array atualizado no sessionStorage
    sessionStorage.setItem('exerciseData', JSON.stringify(updatedDataList));

    // Limpe os campos após salvar
    setPeso1('');
    setPeso2('');
    setRepeticoes('');
    setSeries('');
    onMuscle('');
  };

  return (
    <div className="h-screen w-full flex flex-col items-center md:justify-center mt-[80px] md:mt-[20px]">
      <div className="w-[93%] md:w-[60%] min-w-[350px] flex justify-between items-center border rounded-xl bg-white">
        <p className="flex-1 ps-2 truncate">
          {muscle} - {exercise}
        </p>
        <button
          className="border-l flex-shrink-0 w-[70px] h-auto p-[10px] hover:bg-[#d6d6d5] transition-all duration-500 rounded-r-[10px]"
          onClick={() => {
            onMuscle();
          }}
        >
          Voltar
        </button>
      </div>
      <div className="w-[93%] md:w-[60%] min-w-[350px] mt-[15px] flex justify-center items-center">
        <div className="w-full">
          <label htmlFor="peso1" className="text-[#282A36] font-semibold">
            Peso Inicial:
          </label>
          <input
            type="text"
            placeholder="Peso Inicial"
            name="peso1"
            id="peso1"
            className="w-[95%] mx-auto border rounded-[10px] p-[10px] transition-all duration-500"
            value={peso1}
            onChange={(e) => {
              setPeso1(e.target.value);
            }}
          />
        </div>

        <div className="w-full">
          <label htmlFor="peso2" className="text-[#282A36] font-semibold">
            Peso Final:
          </label>
          <input
            type="text"
            placeholder="Peso Final"
            name="peso2"
            id="peso2"
            className="w-[100%] mx-auto border rounded-[10px] p-[10px] transition-all duration-500"
            value={peso2}
            onChange={(e) => {
              setPeso2(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="w-[93%] md:w-[60%] min-w-[350px] mt-[25px] flex justify-center items-center">
        <div className="w-full">
          <label htmlFor="repeticoes" className="text-[#282A36] font-semibold">
            Repetições:
          </label>
          <input
            type="text"
            placeholder="Repetições"
            name="repeticoes"
            id="repeticoes"
            className="w-[95%] mx-auto border rounded-[10px] p-[10px] transition-all duration-500"
            value={repeticoes}
            onChange={(e) => {
              setRepeticoes(e.target.value);
            }}
          />
        </div>

        <div className="w-full">
          <label htmlFor="series" className="text-[#282A36] font-semibold">
            Séries:
          </label>
          <input
            type="text"
            placeholder="Séries"
            name="series"
            id="series"
            className="w-[100%] mx-auto border rounded-[10px] p-[10px] transition-all duration-500"
            value={series}
            onChange={(e) => {
              setSeries(e.target.value);
            }}
          />
        </div>
      </div>

      <button
        id="save"
        className="hidden w-[93%] md:w-[60%] min-w-[350px] mt-[25px] mx-auto border rounded-[10px] p-[10px] bg-white hover:bg-[#d6d6d5] transition-all duration-500"
        onClick={() => {
          handleSave();
        }}
      >
        Salvar
      </button>
    </div>
  );
}
