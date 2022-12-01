import { FC } from "react";
import Styles from "./StylesIcon.module.scss";
const EnterIcon: FC = () => {
  return (
    <svg
      height={"30px"}
      xmlns="http://www.w3.org/2000/svg"
      className={Styles.spinner}
      viewBox="0 0 512 512"
    >
      <path
        className={Styles.arrow}
        d="M379.955,269.328c0.229-0.341,0.427-0.696,0.635-1.046c0.192-0.322,0.394-0.634,0.57-0.965
    c0.194-0.362,0.357-0.731,0.53-1.099c0.162-0.342,0.333-0.678,0.477-1.029c0.15-0.36,0.27-0.728,0.4-1.093
    c0.134-0.373,0.278-0.741,0.394-1.123c0.112-0.37,0.194-0.744,0.288-1.118c0.098-0.386,0.205-0.766,0.283-1.16
    c0.086-0.437,0.139-0.875,0.202-1.315c0.046-0.336,0.11-0.666,0.144-1.006c0.157-1.578,0.157-3.166,0-4.744
    c-0.034-0.341-0.098-0.672-0.146-1.01c-0.061-0.437-0.114-0.877-0.2-1.31c-0.078-0.395-0.186-0.776-0.285-1.165
    c-0.093-0.371-0.174-0.744-0.286-1.112c-0.115-0.384-0.261-0.755-0.395-1.131c-0.13-0.362-0.248-0.726-0.397-1.083
    c-0.147-0.355-0.32-0.694-0.483-1.04c-0.171-0.363-0.333-0.73-0.523-1.086c-0.179-0.336-0.386-0.656-0.579-0.982
    c-0.206-0.344-0.402-0.694-0.627-1.03c-0.245-0.368-0.52-0.715-0.786-1.067c-0.205-0.272-0.394-0.552-0.61-0.818
    c-0.506-0.614-1.037-1.206-1.6-1.768l-71.994-71.995c-9.37-9.373-24.566-9.373-33.941,0c-9.373,9.373-9.373,24.568,0,33.941
    l31.032,31.032H24c-13.254,0-24,10.744-24,24c0,13.254,10.746,24,24,24h278.054l-31.029,31.029c-9.373,9.373-9.373,24.568,0,33.941
    c4.686,4.686,10.829,7.03,16.97,7.03c6.142,0,12.285-2.342,16.97-7.03l71.997-71.995c0.56-0.56,1.091-1.15,1.594-1.765
    c0.226-0.272,0.419-0.56,0.629-0.838C379.445,270.027,379.714,269.688,379.955,269.328z"
      />
      <path
        className={Styles.circle}
        d="M488,472H184c-13.254,0-24-10.746-24-24v-96.002c0-13.256,10.746-24,24-24s24,10.744,24,24V424h256
    V88H208v72c0,13.254-10.746,24-24,24s-24-10.746-24-24V64c0-13.256,10.746-24,24-24h304c13.254,0,24,10.744,24,24v384
    C512,461.256,501.254,472,488,472z"
      />
    </svg>
  );
};

export { EnterIcon };
