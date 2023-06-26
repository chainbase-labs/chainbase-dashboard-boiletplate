interface OpenTabIconnProps {
  size?: number;
  className?: string;
}
export default function OpenTabIcon({ size, className }: OpenTabIconnProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.30456 7.86731L10.5696 2.60229L11.3945 3.42725L6.12951 8.69227L5.30456 7.86731Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7917 3.20841H7.41211V2.04175H11.9584V6.588H10.7917V3.20841Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9585 9.04159C11.9585 10.6524 10.6527 11.9583 9.04183 11.9583L4.9585 11.9583C3.34767 11.9583 2.04183 10.6524 2.04183 9.04158L2.04183 4.95826C2.04183 3.34743 3.34767 2.04159 4.9585 2.04159L5.54183 2.04159L5.54183 3.20826L4.9585 3.20826C3.992 3.20826 3.2085 3.99176 3.2085 4.95826L3.2085 9.04158C3.2085 10.0081 3.992 10.7916 4.9585 10.7916L9.04183 10.7916C10.0083 10.7916 10.7918 10.0081 10.7918 9.04159L10.7918 8.45825L11.9585 8.45825L11.9585 9.04159Z"
        fill="currentColor"
      />
    </svg>
  );
}
