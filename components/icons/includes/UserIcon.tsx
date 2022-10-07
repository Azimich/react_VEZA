import React from "react";
import { FC } from "react";

const UserIcon: FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.4423 12.1876C12.9714 11.9005 13.5769 11.7371 14.2218 11.7371H14.2239C14.2895 11.7371 14.3201 11.6575 14.272 11.6134C13.6014 11.0053 12.8353 10.5142 12.0051 10.1602C11.9964 10.1557 11.9876 10.1535 11.9789 10.1491C13.3364 9.15307 14.2196 7.53421 14.2196 5.70775C14.2196 2.68206 11.7975 0.230591 8.80918 0.230591C5.82089 0.230591 3.40097 2.68206 3.40097 5.70775C3.40097 7.53421 4.28412 9.15307 5.64383 10.1491C5.63508 10.1535 5.62634 10.1557 5.6176 10.1602C4.64045 10.5776 3.76385 11.1761 3.00968 11.9402C2.25986 12.6964 1.6629 13.5928 1.25212 14.5794C0.847953 15.5456 0.629828 16.5807 0.60943 17.6294C0.608846 17.653 0.612938 17.6764 0.621465 17.6984C0.629993 17.7203 0.642782 17.7403 0.659079 17.7572C0.675377 17.7741 0.694854 17.7875 0.716361 17.7967C0.737869 17.8058 0.760973 17.8105 0.784311 17.8105H2.09374C2.18773 17.8105 2.26643 17.7332 2.26862 17.6383C2.31234 15.9333 2.98782 14.3365 4.18357 13.1262C5.41867 11.874 7.06255 11.1849 8.81137 11.1849C10.0508 11.1849 11.24 11.5317 12.2653 12.181C12.2916 12.1977 12.3218 12.2071 12.3529 12.2083C12.384 12.2094 12.4149 12.2023 12.4423 12.1876ZM8.81137 9.50643C7.81017 9.50643 6.868 9.1111 6.15754 8.39333C5.80799 8.04109 5.53087 7.62245 5.34216 7.16154C5.15344 6.70063 5.05686 6.20654 5.05797 5.70775C5.05797 4.69404 5.44927 3.73995 6.15754 3.02218C6.86581 2.3044 7.80798 1.90908 8.81137 1.90908C9.81475 1.90908 10.7547 2.3044 11.4652 3.02218C11.8147 3.37442 12.0919 3.79305 12.2806 4.25397C12.4693 4.71488 12.5659 5.20896 12.5648 5.70775C12.5648 6.72147 12.1735 7.67556 11.4652 8.39333C10.7547 9.1111 9.81256 9.50643 8.81137 9.50643ZM16.8515 14.7627H15.0153V12.9076C15.0153 12.8104 14.9366 12.7309 14.8404 12.7309H13.6162C13.52 12.7309 13.4413 12.8104 13.4413 12.9076V14.7627H11.6051C11.5089 14.7627 11.4302 14.8422 11.4302 14.9394V16.1762C11.4302 16.2734 11.5089 16.3529 11.6051 16.3529H13.4413V18.2081C13.4413 18.3052 13.52 18.3847 13.6162 18.3847H14.8404C14.9366 18.3847 15.0153 18.3052 15.0153 18.2081V16.3529H16.8515C16.9477 16.3529 17.0264 16.2734 17.0264 16.1762V14.9394C17.0264 14.8422 16.9477 14.7627 16.8515 14.7627Z"
        fill="#2E6143"
      ></path>
    </svg>
  );
};

export { UserIcon };
