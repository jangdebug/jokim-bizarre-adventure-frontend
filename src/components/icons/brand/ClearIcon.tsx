export default function ClearIcon() {
  return (
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <circle id="a" cx="10" cy="10" r="10" />
        <path id="c" d="M0 0h11.429v11.429H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#F0F0F0" xlinkHref="#a" />
        <g mask="url(#b)">
          <g transform="translate(4.286 4.286)">
            <mask id="d" fill="#fff">
              <use xlinkHref="#c" />
            </mask>
            <path
              d="M1.607 5.714h8.214M5.714 1.607v8.214"
              stroke="#000"
              mask="url(#d)"
              transform="rotate(45 5.714 5.714)"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
