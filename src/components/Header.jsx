import { useState } from 'react';

export default function Header({ page, setPage,onMuscle }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="fixed flex justify-center items-center w-full top-2">
        <div className="bg-[#282A36] w-[350px] h-[40px] rounded-[10px] flex justify-around items-center">
          {page === 'Historico' ? (
            <p className="text-[#FF5555]">Historico</p>
          ) : (
            <p className="text-[#F8F8F2] cursor-pointer hover:text-[#bbbbbbde] transition-all duration-300" onClick={() => {setPage('Historico'), onMuscle()}}>
              Historico
            </p>
          )}
          <p className="text-[#F8F8F2]">|</p>
          {page === 'Musculo' ? (
            <p className="text-[#FF5555]">Musculo</p>
          ) : (
            <p className="text-[#F8F8F2] cursor-pointer hover:text-[#bbbbbbde] transition-all duration-300" onClick={() => {setPage('Musculo'), onMuscle()}}>
              Musculo
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
