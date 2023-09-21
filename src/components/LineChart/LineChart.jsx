import { LineChart, Line, XAxis, YAxis } from 'recharts';
const MyChart = () => {
  const studentData = [
    { id: 1, name: 'Student 1', math: 85, physics: 78, chemistry: 90 },
    { id: 2, name: 'Student 2', math: 78, physics: 85, chemistry: 92 },
    { id: 3, name: 'Student 3', math: 92, physics: 88, chemistry: 95 },
    { id: 4, name: 'Student 4', math: 68, physics: 72, chemistry: 68 },
    { id: 5, name: 'Student 5', math: 75, physics: 82, chemistry: 79 },
    { id: 6, name: 'Student 6', math: 88, physics: 90, chemistry: 88 },
    { id: 7, name: 'Student 7', math: 95, physics: 96, chemistry: 97 },
    { id: 8, name: 'Student 8', math: 72, physics: 78, chemistry: 76 },
    { id: 9, name: 'Student 9', math: 90, physics: 92, chemistry: 88 },
    { id: 10, name: 'Student 10', math: 49, physics: 55, chemistry: 60 },
  ];

  return (
    <div>
      <LineChart width={1200} height={400} data={studentData}>
        <XAxis dataKey="name" />
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey={'physics'} stroke="yellow"></Line>
      </LineChart>
    </div>
  );
};

export default MyChart;
