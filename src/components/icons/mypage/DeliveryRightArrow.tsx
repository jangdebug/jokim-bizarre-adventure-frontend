export default function DeliveryRightArrow() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h32v32H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path stroke="#E0E0E0" mask="url(#b)" transform="matrix(-1 0 0 1 32 0)" d="M21 6 11 16l10 10" />
      </g>
    </svg>
  )
}
