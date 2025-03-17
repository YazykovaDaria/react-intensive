import { IconProps } from './types';

const EyeIcon = ({ customStyle, ...props }: IconProps) => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={customStyle}
    {...props}
  >
    <path
      d="M9 3C5.89 3 4.333 5.5 2 8c2.333 2.5 3.89 5 7 5s4.667-2.5 7-5c-2.333-2.5-3.89-5-7-5Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default EyeIcon;
