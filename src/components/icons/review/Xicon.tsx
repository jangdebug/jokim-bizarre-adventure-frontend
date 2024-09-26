export default function Xicon() {
  return (
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="a" d="M0 0h32v32H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path d="M4.5 16h23M16 4.5v23" stroke="#000" mask="url(#b)" transform="rotate(45 16 16)" />
      </g>
    </svg>
  )
}
