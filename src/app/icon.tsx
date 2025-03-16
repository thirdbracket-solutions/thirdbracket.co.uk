import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          //   fontSize: 24,
          //   background: 'black',
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   color: 'white',
        }}
      >
        <svg
          width="24"
          height="24"
          version="1.1"
          viewBox="0 0 4.7625 4.7625"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="a"
              x1={461.64}
              x2={505.25}
              y1={144.91}
              y2={144.91}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#1f2937" />
              <stop offset={1} stopColor="#1f2937" />
            </linearGradient>
            <linearGradient
              id="b"
              x1={423.03}
              x2={500.47}
              y1={144.3}
              y2={144.3}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0} stopColor="#030712" />
              <stop offset={1} stopColor="#1f2937" />
            </linearGradient>
          </defs>
          <g strokeMiterlimit={50} strokeWidth={0}>
            <path
              fill="url(#a)"
              d="m505.21 113.81-43.225 14.605-.35 33.604 43.342 13.984a11.511 11.511 0 0 0 .272-2.068v-59.268a11.522 11.522 0 0 0-.04-.858z"
              // style={{
              //   fontVariationSettings: "&quot",
              // }}
              transform="translate(-23.73 -5.737) scale(.05626)"
            />
            <path
              fill="url(#b)"
              d="M434.54 103.15a11.511 11.511 0 0 0-11.51 11.51v59.268a11.522 11.522 0 0 0 11.521 11.523h59.188a11.511 11.511 0 0 0 4.445-1l-47.676-14.693-.174-47.465 50.127-16.959a11.522 11.522 0 0 0-6.734-2.184z"
              // style={{
              //   fontVariationSettings: "&quot",
              // }}
              transform="translate(-23.73 -5.737) scale(.05626)"
            />
          </g>
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
