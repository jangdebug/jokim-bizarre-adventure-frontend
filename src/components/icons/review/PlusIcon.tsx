export default function PlusIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" fill="white" fillOpacity="0.95" />
      <circle cx="32" cy="32" r="20.5" stroke="black" strokeOpacity="0.1" />
      <path d="M32.8 24V31.2H40V32.8H32.8V40H31.2V32.8H24V31.2H31.2V24H32.8Z" fill="#111111" />
      <mask
        id="mask0_357_34"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="24"
        y="24"
        width="16"
        height="16"
      >
        <path d="M32.8 24V31.2H40V32.8H32.8V40H31.2V32.8H24V31.2H31.2V24H32.8Z" fill="white" />
      </mask>
      <g mask="url(#mask0_357_34)">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.2002 19.2H44.8002V44.8H19.2002V19.2Z" fill="#141A23" />
      </g>
    </svg>
  )
}
