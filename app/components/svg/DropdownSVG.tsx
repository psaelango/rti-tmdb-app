export const DropDownSVG: React.FC<React.SVGProps<SVGSetElement>> = ({
  fill = "none",
  height = 2.5,
  width = 2.5,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    width={width}
    className={className}
    aria-hidden="true"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
);
