
type Props = {
  width?: string;
  height?: string;
}

export default function HomeIcon({
  width = "33",
  height = "33"
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.2 20.3529H12.2V21.3529V32H5.95V17.4706V16.4706H4.95H2.31994L16.5 1.4564L30.6801 16.4706H28.05H27.05V17.4706V32H20.8V21.3529V20.3529H19.8H13.2Z" fill="white" stroke="#8C8C8C" stroke-width="2" />
    </svg>
  )
}