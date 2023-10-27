import { useState, useEffect } from 'react';

export default function Days({ sessionData, onSelect }) {
  const [selectDay, setSelectDay] = useState('');

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

  return (
    <>
      <div className="w-[50%] min-w-[350px] flex flex-col justify-center items-center">
        {Object.entries(groupedData).map(([key, value], index) => {
          const [date, muscle] = key.split('-');
          return (
            <div
              key={index}
              onClick={() => setSelectDay(date)}
              className="mx-auto mb-[20px] w-[300px] text-center border-[#282A36] border-[2px] rounded-[10px] p-[10px] bg-white flex justify-between items-center transition-all duration-500 "
            >
              <i
                className="fas fa-eye hover:text-[#FF5555] transition-all duration-500 cursor-pointer"
                onClick={() => onSelect(date, muscle)}
                title='Visualizar'
              ></i>
              <p>
                {date} - {muscle}
              </p>
              <i className="fas fa-share-square hover:text-[#FF5555] transition-all duration-500 cursor-pointer" title='Pegar dados'></i>
            </div>
          );
        })}
      </div>
    </>
  );
}
