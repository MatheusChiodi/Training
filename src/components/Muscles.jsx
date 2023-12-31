export default function Muscles({ onMuscle }) {
  const muscles = [
    {
      muscle: 'Peito',
      id: '1',
      bg: '#a9def9',
      img: './Peito.png',
    },
    {
      muscle: 'Costas',
      id: '2',
      bg: '#d0f4de',
      img: './Costas.png',
    },
    {
      muscle: 'Bíceps',
      id: '3',
      bg: '#e4c1f9',
      img: './Biceps.png',
    },
    {
      muscle: 'Tríceps',
      id: '4',
      bg: '#fcf6bd',
      img: './Triceps.png',
    },
    {
      muscle: 'Ombro',
      id: '5',
      bg: '#ff686b',
      img: './Ombro.png',
    },
    {
      muscle: 'Trapézio',
      id: '6',
      bg: '#ccdbfd',
      img: './Trapezio.png',
    },
    {
      muscle: 'Quadriceps',
      id: '7',
      bg: '#f9d9f9',
      img: './Quadriceps.png',
    },
    {
      muscle: 'Posterior',
      id: '8',
      bg: '#a9def9',
      img: './Posterior.png',
    },
    {
      muscle: 'Glúteo',
      id: '9',
      bg: '#d0f4de',
      img: './Gluteo.png',
    },
    {
      muscle: 'Panturrilha',
      id: '10',
      bg: '#e4c1f9',
      img: './Panturrilha.png',
    },
    {
      muscle: 'Antebraço',
      id: '11',
      bg: '#fcf6bd',
      img: './Antebraco.png',
    },
    {
      muscle: 'Abdômen',
      id: '12',
      bg: '#ff686b',
      img: './Abdomen.png',
    },
  ];

  return (
    <div className="flex justify-center items-start md:items-center w-full pb-[30px] mt-[80px] lg:mt-[50px] h-screen overflow-auto">
      <div className="grid grid-rows-6 md:grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4 mx-auto w-[320px] md:w-[500px] lg:w-[992px]">
        {muscles.map((muscle) => (
          <button
            key={muscle.id}
            className="w-[150px] h-[160px] rounded-[10px] flex flex-col justify-center items-center buttonMuscle"
            style={{
              background: muscle.bg,
              boxShadow:
                '0px 4px 6px -1px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
            onClick={() => onMuscle(muscle.muscle)}
          >
            <img src={muscle.img} alt={muscle.muscle} />
            <h1>{muscle.muscle}</h1>
          </button>
        ))}
      </div>
      <div className="h-[40px]"></div>
    </div>
  );
}
