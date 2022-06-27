import { Icon, IconProps } from '@chakra-ui/react';

const Logo = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 480 480" {...props}>
      <rect width="480" height="480" rx="80" fill="#26262E" />
      <path
        fill="#F1EBE6"
        stroke="#26262E"
        strokeWidth="8"
        d="M105.984 145.915C98.9206 128.431 95.3888 119.69 98.6257 112.064C101.863 104.438 110.646 100.89 128.214 93.792C145.672 86.7384 154.401 83.2116 162.001 86.4071C169.601 89.6026 173.17 98.2658 180.308 115.592L269.769 332.747C280.417 358.594 285.741 371.517 279.518 380.469C273.294 389.422 259.326 388.934 231.39 387.96L229.343 387.888C216.742 387.449 210.442 387.229 205.589 383.831C200.736 380.433 198.374 374.587 193.651 362.897L105.984 145.915Z"
      />
      <path
        fill="#E9B97D"
        stroke="#26262E"
        strokeWidth="8"
        d="M299.705 119.132C306.744 101.642 310.264 92.8971 317.88 89.649C317.893 89.6435 317.905 89.6381 317.918 89.6327C325.541 86.4004 334.281 89.9316 351.762 96.9942C369.221 104.048 377.95 107.575 381.191 115.186C381.196 115.199 381.201 115.212 381.207 115.225C384.431 122.842 380.904 131.572 373.85 149.031L286.13 366.147C281.45 377.73 279.11 383.521 274.321 386.912C274.264 386.952 274.207 386.992 274.15 387.032C269.326 390.372 263.084 390.59 250.599 391.025C223.145 391.983 209.417 392.462 203.176 383.73C203.106 383.632 203.037 383.533 202.969 383.434C196.886 374.59 202.015 361.848 212.272 336.364L299.705 119.132Z"
      />
    </Icon>
  );
};

export default Logo;
