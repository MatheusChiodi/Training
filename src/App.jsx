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
    <div>
      {muscles.map((muscle) => (
        <div key={muscle.id}>
          <img src={muscle.img} alt={muscle.muscle} />
          <h1>{muscle.muscle}</h1>
        </div>
      ))}
    </div>
  );
}
