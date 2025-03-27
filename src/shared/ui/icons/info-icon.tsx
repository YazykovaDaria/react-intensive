import { IconProps } from './types';

export const InfoIcon = ({ customStyle, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={customStyle}
    {...props}
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M2.343 2.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 2.343 2.343M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2" />
      <path d="M7 9H6V7h3v5H7zm2-5v2H7V4z" />
    </g>
    <defs>
      <clipPath>
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
