type ProgressCircleProps = {
  strokeWidth: number;
  percentage: number;
  className?: string;
};
export const ProgressCircle = ({ className, strokeWidth, percentage }: ProgressCircleProps) => {
  const radius = 50 - strokeWidth / 2;
  const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

  const diameter = Math.PI * 2 * radius;
  const progressStyle = {
    stroke: `${percentage <= 30 ? "#FF0000" : percentage > 30 && percentage <= 99 ? "#FFAC1C" : "#50C878"}`,
    strokeLinecap: "round",
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${((100 - percentage) / 100) * diameter}px`,
  };

  return (
    <svg className={className} viewBox="0 0 100 100" width={100} height={100}>
      <path
        className="CircularProgressbar-trail"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={{
          stroke: "#d6d6d6",
        }}
      />

      <path
        className="CircularProgressbar-path"
        d={pathDescription}
        strokeWidth={strokeWidth}
        fillOpacity={0}
        style={progressStyle as any}
      />

      <text
        className="CircularProgressbar-text"
        x={50}
        y={50}
        style={{
          fill: `${
            percentage <= 30 ? "#FF0000" : percentage > 30 && percentage <= 99 ? "#FFAC1C" : "#50C878"
          }`,
          fontSize: "24px",
          dominantBaseline: "central",
          textAnchor: "middle",
        }}
      >
        {`${percentage}%`}
      </text>
    </svg>
  );
};
