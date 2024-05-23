
type Props = {
  width?: string;
  height?: string;
}

export default function LocationIcon({ 
  width = "10", 
  height = "12"
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 0C2.23571 0 0 1.878 0 4.2C0 7.35 5 12 5 12C5 12 10 7.35 10 4.2C10 1.878 7.76429 0 5 0ZM5 5.7C4.01429 5.7 3.21429 5.028 3.21429 4.2C3.21429 3.372 4.01429 2.7 5 2.7C5.98571 2.7 6.78571 3.372 6.78571 4.2C6.78571 5.028 5.98571 5.7 5 5.7Z" fill="black" />
    </svg>

  )
}