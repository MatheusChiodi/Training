import { useEffect, useState } from 'react';

import Abdomen from '../context/Abdomen';
import Antebraco from '../context/Antebraco';
import Biceps from '../context/Biceps';
import Costas from '../context/Costas';
import Gluteo from '../context/Gluteo';
import Ombro from '../context/Ombro';
import Panturrilha from '../context/Panturrilha';
import Peito from '../context/Peito';
import Posterior from '../context/Posterior';
import Quadriceps from '../context/Quadriceps';
import Triceps from '../context/Triceps';
import Trapezio from '../context/Trapezio';

export default function Exercises({ onMuscle, muscle }) {
  const [exercises, setExercises] = useState([]);
  const muscleToExercisesMap = {
    Abdomen: Abdomen,
    Antebraco: Antebraco,
    Biceps: Biceps,
    Costas: Costas,
    Gluteo: Gluteo,
    Ombro: Ombro,
    Panturrilha: Panturrilha,
    Peito: Peito,
    Posterior: Posterior,
    Quadriceps: Quadriceps,
    Triceps: Triceps,
    Trapezio: Trapezio,
  };

  useEffect(() => {
    if (muscleToExercisesMap[muscle]) {
      setExercises(muscleToExercisesMap[muscle]);
    }
  }, [muscle]);

  return (
    <>
      <div className="flex justify-center items-center">
        <i className="fas fa-arrow-left text-[16px] mx-2 mt-[-12px] cursor-pointer hover:text-[#6272A4] transition-all duration-300" onClick={onMuscle}></i>
        <h1 className="font-semibold text-[#282A36] mb-4">
          Escolha 1 exercicio:
        </h1>
      </div>
      <div className="w-[350px] h-[350px] overflow-auto border-[#282A36] border-[1px] rounded-[10px]">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="border-b-[2px] p-2 text-center">
            <p className="cursor-pointer hover:text-[#6272A4] transition-all duration-300">
              {exercise.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
