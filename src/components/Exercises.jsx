import { useEffect, useState } from 'react';

import AbdomenData from '../context/Abdomen';
import AntebracoData from '../context/Antebraco';
import BicepsData from '../context/Biceps';
import CostasData from '../context/Costas';
import GluteoData from '../context/Gluteo';
import OmbroData from '../context/Ombro';
import PanturrilhaData from '../context/Panturrilha';
import PeitoData from '../context/Peito';
import PosteriorData from '../context/Posterior';
import QuadricepsData from '../context/Quadriceps';
import TricepsData from '../context/Triceps';
import TrapezioData from '../context/Trapezio';

export default function Exercises({ onMuscle, muscle, onExercise }) {
  const [exercises, setExercises] = useState([]);
  const muscleToExercisesMap = {
    Abdômen: AbdomenData,
    Antebraço: AntebracoData,
    Bíceps: BicepsData,
    Costas: CostasData,
    Glúteo: GluteoData,
    Ombro: OmbroData,
    Panturrilha: PanturrilhaData,
    Peito: PeitoData,
    Posterior: PosteriorData,
    Quadriceps: QuadricepsData,
    Tríceps: TricepsData,
    Trapézio: TrapezioData,
  };

  useEffect(() => {
    if (muscleToExercisesMap[muscle]) {
      setExercises(muscleToExercisesMap[muscle]);
    }
  }, [muscle]);

  return (
    <div className=" h-screen w-full flex flex-col items-center">
      <div className="flex justify-center items-center mt-[70px]">
        <button
          className="fas fa-arrow-left text-[16px] mx-2 mt-[-12px] cursor-pointer hover:text-[#6272A4] transition-all duration-300"
          onClick={onMuscle}
          aria-label="Voltar"
        ></button>
        <h1 className="font-semibold text-[#282A36] mb-4">
          Escolha 1 exercicio:
        </h1>
      </div>
      <div className="bg-white w-[350px] h-[350px] overflow-auto border-[#282A36] border-[1px] rounded-[10px] scrollbar-hide">
        {exercises &&
          exercises.map((exercise) => (
            <div key={exercise.id} className="border-b-[2px] p-2 text-center">
              <button
                className="cursor-pointer hover:text-[#FF5555] transition-all duration-300"
                onClick={() => onExercise(exercise.name)}
              >
                {exercise.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
