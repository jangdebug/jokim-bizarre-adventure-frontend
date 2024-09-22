export default function UpArrowIcon() {
  return (
    <svg
      width="375"
      height="16"
      viewBox="0 0 375 16"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="a" d="M0 0h375v16H0z" />
        <path id="c" d="M0 0h16v16H0z" />
      </defs>
      <g transform="matrix(1 0 0 -1 0 16)" fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <g mask="url(#b)">
          <path
            d="M-1 27V16h155.746a4.5 4.5 0 0 0 4.243-3h.01l4.392-9.514A6 6 0 0 1 168.84 0h36.322a6 6 0 0 1 5.448 3.486L215 13h.02a4.5 4.5 0 0 0 4.243 3H376v11H-1z"
            fill="#F0F0F0"
          />
          <g transform="translate(180 4)">
            <mask id="d" fill="#fff">
              <use xlinkHref="#c" />
            </mask>
            <path stroke="#000" mask="url(#d)" transform="rotate(-90 8 8)" d="m10.5 3-5 5 5 5" />
          </g>
        </g>
      </g>
    </svg>
  )
}
