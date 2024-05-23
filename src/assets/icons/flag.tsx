
type Props = {
  width?: string;
  height?: string;
}

export default function FlagIcon({ 
  width = "13", 
  height = "13",
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_447_4609)">
        <path d="M7.84972 3.51399L7.64692 2.5H3.08398V11.1189H4.09797V7.56993H6.93713L7.13993 8.58392H10.6889V3.51399H7.84972Z" fill="#FF0000" />
      </g>
      <defs>
        <clipPath id="clip0_447_4609">
          <rect width="12.1678" height="12.1678" fill="white" transform="translate(0.548828 0.471924)" />
        </clipPath>
      </defs>
    </svg>

  )
}