
type Props = {
  width?: string;
  height?: string;
}

export default function DownIcon({
  width = "18",
  height = "14"
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3962 0.5H0.603751C0.100078 0.5 -0.18116 1.13777 0.130759 1.57318L8.52701 13.2493C8.76734 13.5836 9.2301 13.5836 9.47299 13.2493L17.8692 1.57318C18.1812 1.13777 17.8999 0.5 17.3962 0.5Z" fill="#707293" />
    </svg>

  )
}