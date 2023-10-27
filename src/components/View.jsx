import { useState, useEffect } from 'react';

export default function View({
  sessionData,
  onSelect,
  selectDay,
  selectMuscle,
}) {
  const [selected, setSelected] = useState(sessionData);

  const [training, setTraining] = useState('');
  const [peso1, setPeso1] = useState('');
  const [peso2, setPeso2] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [series, setSeries] = useState('');

  const editTraining = (id) => {
    const data = selected.filter((item) => item.id === id);
    setTraining(data);
  };

  const handleEdit = () => {
    const newData = {
      muscle: selectMuscle,
      exercise: training[0].exercise,
      peso1,
      peso2,
      repeticoes,
      series,
      date: training[0].date,
      id: training[0].id,
    };

    // pegue o array atualizado e remova o item antigo
    const updatedDataList = [...selected];
    const index = updatedDataList.findIndex(
      (item) => item.id === training[0].id
    );
    updatedDataList.splice(index, 1, newData);

    setSelected(updatedDataList);

    // Salve o array atualizado no sessionStorage
    sessionStorage.setItem('exerciseData', JSON.stringify(updatedDataList));

    // Limpe os campos após salvar
    setPeso1('');
    setPeso2('');
    setRepeticoes('');
    setSeries('');
    setTraining('');
  };

  // pega os dados em training e atualiza os campos
  useEffect(() => {
    if (training !== '') {
      setPeso1(training[0].peso1);
      setPeso2(training[0].peso2);
      setRepeticoes(training[0].repeticoes);
      setSeries(training[0].series);
    }
  }, [training]);

  return (
    <div className="w-full flex flex-col items-center mt-[40px]">
      {training !== '' ? (
        <>
          {training.map((item) => (
            <>
              <div
                key={item.id}
                className="w-[30%] min-w-[350px] flex justify-center items-center bg-white mb-[20px] mt-[50px] rounded-[10px]"
              >
                <div className="w-[100%] mx-auto border rounded-l-[10px] p-[10px]">
                  <p>
                    {item.exercise} - {selectMuscle}
                  </p>
                </div>
                <div>
                  <button
                    className="w-[100%] mx-auto border rounded-r-[10px] p-[10px] hover:bg-[#d6d6d5] transition-all duration-500"
                    onClick={() => setTraining('')}
                  >
                    Voltar
                  </button>
                </div>
              </div>

              <div className="w-[30%] min-w-[350px] mt-[15px] flex justify-center items-center">
                <div className="w-full">
                  <label
                    htmlFor="peso1"
                    className="text-[#282A36] font-semibold"
                  >
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
                  <label
                    htmlFor="peso2"
                    className="text-[#282A36] font-semibold"
                  >
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

              <div className="w-[30%] min-w-[350px] mt-[25px] flex justify-center items-center">
                <div className="w-full">
                  <label
                    htmlFor="repeticoes"
                    className="text-[#282A36] font-semibold"
                  >
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
                  <label
                    htmlFor="series"
                    className="text-[#282A36] font-semibold"
                  >
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
                id="edit"
                className="w-[30%] min-w-[350px] mt-[25px] mx-auto border rounded-[10px] p-[10px] bg-white hover:bg-[#d6d6d5] transition-all duration-500"
                onClick={() => {
                  handleEdit();
                }}
              >
                Editar
              </button>
            </>
          ))}
        </>
      ) : (
        <>
          <div className="w-[30%] min-w-[350px] flex justify-center items-center bg-white mb-[20px] mt-[50px] rounded-[10px]">
            <div className="w-[100%] mx-auto border rounded-l-[10px] p-[10px]">
              <p>
                {selectDay} - {selectMuscle}
              </p>
            </div>
            <div>
              <button
                className="w-[100%] mx-auto border rounded-r-[10px] p-[10px] hover:bg-[#d6d6d5] transition-all duration-500"
                onClick={() => onSelect(null)}
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
                <div className="border rounded-t-[10px] w-full p-2 text-center bg-[#d6d6d5] flex justify-around items-center">
                  <p>{item.exercise}</p>
                  <i
                    className="fas fa-edit text-[#282A36] hover:text-[#FF5555] transition-all duration-500 cursor-pointer"
                    onClick={() => editTraining(item.id)}
                  ></i>
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
      )}
    </div>
  );
}
