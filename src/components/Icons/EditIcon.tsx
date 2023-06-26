interface EditIconProps {
  size?: number;
  className?: string;
}
export default function EditIcon({ size, className }: EditIconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="m7.841 20.043-4.328 1.18a.6.6 0 0 1-.737-.736l1.18-4.324a1.2 1.2 0 0 1 .314-.539l8.094-7.995a.9.9 0 0 1 1.268.003l2.736 2.736a.9.9 0 0 1 .004 1.268l-7.196 7.296-.802.802a1.2 1.2 0 0 1-.533.31ZM19.703 4.81l-.514-.513a2.542 2.542 0 0 0-3.595 0l-.999 1.067a.9.9 0 0 0 .02 1.252l2.77 2.768a.9.9 0 0 0 1.25.02l1.068-.999a2.542 2.542 0 0 0 0-3.594Z"></path>
    </svg>
  );
}
