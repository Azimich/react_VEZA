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
  isView?: boolean;
  labelColor?: string;
  spinnerMode?: boolean;
  spinnerSpeed?: number;
}) => {
  const {
    size = 100,
    isView = false,
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
  const loadingDuration = progressLabel > 1000 ? 1000 : 500; // 3 seconds
  useEffect(() => {
    !isView && setProgress(0);
    const loadingTimeout = setTimeout(() => {
      progress < progressLabel && isView && setProgress(progress + 1);
    }, loadingDuration / progressLabel);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [progress, isView]);

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * (progress / progressLabel);

  const hideLabel = size < 100 || !label.length || spinnerMode;
  return (
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
          strokeLinecap="round"
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={`${dashOffset} ${dashArray}`}
          strokeDashoffset={1}
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
  );
};

export { ProgressBar };
