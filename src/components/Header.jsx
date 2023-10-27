import { useState } from 'react';

export default function Header({ page, setPage, onMuscle, sessionData }) {
  return (
    <div className="fixed w-full flex items-center justify-center bg-[#F8F8F2]">
      <div className="flex justify-center items-center w-full bg-[#F8F8F2] pt-[20px]">
        <div className="bg-[#282A36] w-[350px] h-[40px] rounded-[10px] flex justify-around items-center">
          {sessionData &&
            (page === 'Historico' ? (
              <>
                <p className="text-[#FF5555]">Histórico</p>
                <p className="text-[#F8F8F2]">|</p>
              </>
            ) : (
              <>
                <p
                  className="text-[#F8F8F2] cursor-pointer hover:text-[#bbbbbbde] transition-all duration-300"
                  onClick={() => {
                    setPage('Historico');
                    onMuscle();
                  }}
                >
                  Histórico
                </p>
                <p className="text-[#F8F8F2]">|</p>
              </>
            ))}
          {page === 'Musculo' ? (
            <p className="text-[#FF5555]">Treino</p>
          ) : (
            <p
              className="text-[#F8F8F2] cursor-pointer hover:text-[#bbbbbbde] transition-all duration-300"
              onClick={() => {
                setPage('Musculo'), onMuscle();
              }}
            >
              Treino
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
