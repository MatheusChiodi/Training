import { useState, useEffect } from 'react';

export default function Days({ sessionData, onSelect }) {
  function groupByDateAndMuscle(data) {
    return data.reduce((acc, curr) => {
      let key = `${curr.date}-${curr.muscle}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});
  }

  const groupedData = groupByDateAndMuscle(sessionData);

  const [notification, setNotification] = useState({
    show: false,
    message: '',
  });

  function showNotification(message) {
    setNotification({ show: true, message });
    setTimeout(() => setNotification({ show: false, message: '' }), 1000); // A notificação desaparecerá após 3 segundos
  }

  function getData(date, muscle) {
    const data = groupedData[`${date}-${muscle}`];
    const formattedData = data
      .map(
        (item) =>
          `Musculo: ${item.muscle} - Data: ${item.date} - Exercicio: ${item.exercise} - Peso inicial: ${item.peso1} - Peso final: ${item.peso2} - Repetições: ${item.repeticoes} - Séries: ${item.series}`
      )
      .join('\n');
    navigator.clipboard
      .writeText(formattedData)
      .then(() => {
        showNotification('Dados copiados com sucesso!');
      })
      .catch((err) => {
        showNotification('Ocorreu um erro ao copiar os dados.');
      });
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[50%] min-w-[350px] pt-10 overflow-auto flex flex-col justify-center items-center">
        <div className="h-[50px] w-full"></div>
        {notification.show && (
          <div className="absolute bottom-1 left-auto z-50 w-[350px] p-1 text-center bg-[#282A36] border border-gray-200 shadow-lg rounded-[10px]">
            <p
              className="text-[18px] m-0 p-0 text-[#F8F8F2]"
              style={{
                boxShadow:
                  '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              {notification.message}
            </p>
          </div>
        )}
        {Object.entries(groupedData).map(([key, value], index) => {
          const [date, muscle] = key.split('-');
          return (
            <div
              key={index}
              className="mx-auto mb-[20px] w-[300px] text-center border-[#282A36] border-[2px] rounded-[10px] p-[10px] bg-white flex justify-between items-center transition-all duration-500 "
              style={{
                boxShadow:
                  '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <i
                className="fas fa-eye hover:text-[#FF5555] transition-all duration-500 cursor-pointer"
                onClick={() => onSelect(date, muscle)}
                title="Visualizar"
              ></i>
              <p>
                {date} - {muscle}
              </p>
              <i
                className="fas fa-share-square hover:text-[#FF5555] transition-all duration-500 cursor-pointer"
                title="Pegar dados"
                onClick={() => getData(date, muscle)}
              ></i>
            </div>
          );
        })}

        <div className="h-[150px] w-full"></div>
      </div>
    </div>
  );
}
