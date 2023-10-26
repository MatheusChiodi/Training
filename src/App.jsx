export default function App() {
  const muscles = [
    {
      muscle: 'Peito',
      id: '1',
      bg: '#a9def9',
      img: '../Peito.png',
    },
    {
      muscle: 'Costas',
      id: '2',
      bg: '#d0f4de',
      img: '../Costas.png',
    },
    {
      muscle: 'Bíceps',
      id: '3',
      bg: '#e4c1f9',
      img: '../Biceps.png',
    },
    {
      muscle: 'Tríceps',
      id: '4',
      bg: '#fcf6bd',
      img: '../Triceps.png',
    },
    {
      muscle: 'Ombro',
      id: '5',
      bg: '#ff686b',
      img: '../Ombro.png',
    },
    {
      muscle: 'Trapézio',
      id: '6',
      bg: '#ccdbfd',
      img: '../Trapezio.png',
    },
    {
      muscle: 'Quadriceps',
      id: '7',
      bg: '#f9d9f9',
      img: '../Quadriceps.png',
    },
    {
      muscle: 'Posterior',
      id: '8',
      bg: '#a9def9',
      img: '../Posterior.png',
    },
    {
      muscle: 'Glúteo',
      id: '9',
      bg: '#d0f4de',
      img: '../Gluteo.png',
    },
    {
      muscle: 'Panturrilha',
      id: '10',
      bg: '#e4c1f9',
      img: '../Panturrilha.png',
    },
    {
      muscle: 'Antebraço',
      id: '11',
      bg: '#fcf6bd',
      img: '../Antebraco.png',
    },
    {
      muscle: 'Abdômen',
      id: '12',
      bg: '#ff686b',
      img: '../Abdomen.png',
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="grid grid-rows-6 md:grid-rows-4 grid-flow-col gap-4 mx-auto w-[350px] md:w-[500px]">
          {muscles.map((muscle) => (
            <button
              key={muscle.id}
              className="w-[150px] rounded-[10px] flex flex-col justify-center items-center buttonMuscle"
              style={{ background: muscle.bg }}
            >
              <img src={muscle.img} alt={muscle.muscle} />
              <h1>{muscle.muscle}</h1>
            </button>
          ))}
        </div>
      </div>
      <div className="absolute flex justify-center items-center w-full top-2">
        <div className="bg-[#282A36] w-[350px] h-[40px] rounded-[20px] flex justify-around">
          <p>
          </p>
          <div className="bg-[#F8F8F2] rounded-[50%] h-[40px] w-[40px] text-center flex justify-center items-center mr-[-40px] mt-[20px] border-[#282A36] border-[5px]">
          </div>
        </div>
      </div>
    </>
  );
}
