type Props = {
  width?: number;
  height?: number;
}
export default function ContactIcon({
  width = 35,
  height= 35,
}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 35 35" fill="none">
      <g filter="url(#filter0_d_609_4769)">
        <circle cx="17.5" cy="13.5" r="13.5" fill="white" />
      </g>
      <path d="M17.5 7C13.3618 7 10 10.048 10 13.8C10 17.552 13.3618 20.6 17.5 20.6H17.9412V23C22.2294 21.128 25 17.4 25 13.8C25 10.048 21.6382 7 17.5 7ZM18.3824 18.6H16.6176V17H18.3824V18.6ZM18.3824 15.8H16.6176C16.6176 13.2 19.2647 13.4 19.2647 11.8C19.2647 10.92 18.4706 10.2 17.5 10.2C16.5294 10.2 15.7353 10.92 15.7353 11.8H13.9706C13.9706 10.032 15.55 8.6 17.5 8.6C19.45 8.6 21.0294 10.032 21.0294 11.8C21.0294 13.8 18.3824 14 18.3824 15.8Z" fill="#787878" />
      <defs>
        <filter id="filter0_d_609_4769" x="0" y="0" width="35" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_609_4769" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_609_4769" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}