import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  onComplete?: () => void;
};
const MIN = 0,
  MAX = 100;

const ProgressBar = ({ value, onComplete }: Props) => {
  const [percentage, setPercentage] = useState<number>(0);
  const percentageRef = useRef<number>(percentage);

  if (percentage >= value && typeof onComplete === "function") {
    onComplete();
  }

  useEffect(() => {
    setInterval(() => {
      if (percentageRef.current < value) {
        setPercentage((perc) => Math.min(MAX, Math.max(MIN, perc + 1)));
        percentageRef.current += 1;
      }
    }, 100);
  }, []);

  return (
    <div className="progress__container">
      <span>{percentage}%</span>
      <div className="progress__fill" style={{ width: `${percentage}%` }}></div>
      {/* another way for animation is s=using transform scaleX */}
    </div>
  );
};

export default ProgressBar;
