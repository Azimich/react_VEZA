import Styles from "./ProgressBar.module.scss";
import { useEffect, useState } from "react";

const ProgressBar = (props: {
  progressLabel?: number;
  size?: number;
  trackWidth?: number;
  trackColor?: string;
  indicatorWidth?: number;
  indicatorColor?: string;
  indicatorCap?: string;
  label?: string;
  labelColor?: string;
  spinnerMode?: boolean;
  spinnerSpeed?: number;
}) => {
  let {
    size = 100,
    progressLabel = 185,
    trackWidth = 10,
    trackColor = ``,
    indicatorWidth = 10,
    indicatorColor = `#FFF`,
    label = `Loading...`,
    labelColor = `#FFF`,
    spinnerMode = false,
    spinnerSpeed = 1,
  } = props;

  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds
  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      progress < progressLabel && setProgress(progress + 1);
    }, loadingDuration / 100);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [progress]);

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((progressLabel - progress) / 100);

  let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;
  console.log("dashOffset", dashOffset);
  return (
    <>
      <div
        className={Styles.svg_pi_wrapper}
        style={{ width: size, height: size }}
      >
        <svg className={Styles.svg_pi} style={{ width: size, height: size }}>
          <circle
            className={Styles.svg_pi_track}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={trackWidth}
          />
          <circle
            className={`${spinnerMode ? Styles.svg_pi_indicator__spinner : ""}`}
            style={{ animationDuration: String(spinnerSpeed * 1000) }}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {!hideLabel && (
          <div className={Styles.svg_pi_label} style={{ color: labelColor }}>
            {!spinnerMode && (
              <span className={Styles.svg_pi_label__progress}>
                {`${progress > progressLabel ? progressLabel : progress}`}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export { ProgressBar };
