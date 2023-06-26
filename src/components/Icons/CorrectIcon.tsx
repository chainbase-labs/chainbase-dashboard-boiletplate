interface CorrectIconProps {
  size?: number;
  className?: string;
}
export default function CorrectIcon({ size, className }: CorrectIconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.28571L5.19355 10L14 1"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  );
}
