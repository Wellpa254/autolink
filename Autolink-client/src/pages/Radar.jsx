import { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function Radar() {
  const [radius, setRadius] = useState(200); // start at 200m

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((prev) => (prev < 2000 ? prev + 200 : prev));
    }, 4000); // expand every 4s

    return () => clearInterval(interval);
  }, []);

  const data = [{ name: "Radar", value: radius }];
  const COLORS = ["#00C49F"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📡 Radar SOS</h1>
      <h2>Current radius: {radius} m</h2>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={radius / 10} // scaled down for visualization
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}
