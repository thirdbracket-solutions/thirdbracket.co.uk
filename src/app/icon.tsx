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
              id="linearGradient10"
              x1="-.51585"
              x2="4.7596"
              y1="2.3563"
              y2="2.4056"
              gradientTransform="matrix(.99999 0 0 .99999 216.43 211.14)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff" offset=".77106" />
              <stop stop-color="#fff" stop-opacity=".2" offset=".9999" />
              <stop stop-color="#fff" stop-opacity="0" offset="1" />
            </linearGradient>
          </defs>
          <g transform="matrix(.97224 0 0 .97224 -210.35 -205.21)">
            <g>
              <rect
                transform="translate(216.43 211.14)"
                x="-4.8213"
                y="-1.6938"
                width="13.076"
                height="9.2606"
                display="none"
                stroke-miterlimit="50"
                stroke-width="0"
              />
              <path
                d="m221.18 211.73-2.5161 0.85007-0.0202 1.9446 2.529 0.81596a0.61912 0.61912 0 0 0 8e-3 -0.0625v-3.5243a0.61912 0.61912 0 0 0-1e-3 -0.0238z"
                fill="#24262b"
                stroke-width=".99999"
              />
              <path
                d="m220.82 215.84-2.8122-0.86661-0.01-2.7466 2.9156-0.98649a0.61912 0.61912 0 0 0-0.34365-0.10439h-3.5243a0.61912 0.61912 0 0 0-0.61908 0.61908v3.5243a0.61912 0.61912 0 0 0 0.61908 0.61908h3.5243a0.61912 0.61912 0 0 0 0.25011-0.0584z"
                fill="#24262b"
              />
            </g>
            <path
              d="m220.91 211.24a0.61912 0.61912 0 0 0-5.2e-4 0l-2.9156 0.98649 0.01 2.7466 2.8122 0.86661a0.61912 0.61912 0 0 0 0.3607-0.49816l-2.529-0.81596 0.0202-1.9446 2.5161-0.85007a0.61912 0.61912 0 0 0-0.27389-0.49093z"
              fill="url(#linearGradient10)"
              stroke-width=".99999"
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
