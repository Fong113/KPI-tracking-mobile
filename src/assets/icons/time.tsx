
type Props = {
  width?: string;
  height?: string;
}

export default function ClockIcon({
  width = "13",
  height = "13"
}: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.08409 1.63452C3.29563 1.63452 1.01416 3.91599 1.01416 6.70445C1.01416 9.49291 3.29563 11.7744 6.08409 11.7744C8.87255 11.7744 11.154 9.49291 11.154 6.70445C11.154 3.91599 8.87255 1.63452 6.08409 1.63452ZM8.21346 8.83382L5.5771 7.21145V4.16949H6.33759V6.80585L8.61906 8.17473L8.21346 8.83382Z" fill="#1D2D35" />
  </svg>
  )
}