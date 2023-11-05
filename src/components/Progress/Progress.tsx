import { useProgress } from "../../hooks";
import "./Progress.scss";
import { type ProgressProps } from "./Progress.types";
import { type ReactElement, type CSSProperties } from "react";

export const Progress = ({}: ProgressProps): ReactElement => {
  const { completionPercentage } = useProgress();
  return (
    <div className="progress-component">
      <h1 className="progress-component__header">Progress</h1>
      <div className="progress-component__bar">
        <div
          className="progress-component__fill"
          style={
            {
              "--complete-percentage": `${completionPercentage}%`,
            } as CSSProperties
          }
        ></div>
      </div>
      <h3 className="progress-component__percentage-text">
        {completionPercentage}% completed
      </h3>
    </div>
  );
};
