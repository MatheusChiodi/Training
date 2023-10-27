import { useState, useEffect } from 'react';

export default function View({
  sessionData,
  onSelect,
  selectDay,
  selectMuscle,
}) {
  const selected = sessionData;

  return (
    <div className="w-full flex flex-col items-center mt-[40px]">
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
    </div>
  );
}
