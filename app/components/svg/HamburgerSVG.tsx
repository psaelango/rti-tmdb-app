export const HamburgerSVG: React.FC<React.SVGProps<SVGSetElement>> = ({
  fill = "none",
  height = 5,
  width = 5,
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
    height={height}
    width={width}
    className={className}
    aria-hidden="true"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
);
