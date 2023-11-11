import { SVGProps } from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ShotWithShootDelay } from "./get-shots-to-fire";
import {
  rocketRotation,
  ROCKET_ORIGIN_X,
  ROCKET_TOP_Y,
  TIME_BEFORE_SHOOTING,
} from "./make-ufo-positions";

export const ROCKET_HEIGHT = 245;
export const ROCKET_WIDTH = 138;

const JUMP_IN_DURATION = 20;

export const Rocket = ({
  shots,
  ...props
}: SVGProps<SVGSVGElement> & {
  shots: ShotWithShootDelay[];
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const jumpIn = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    delay: TIME_BEFORE_SHOOTING - 30,
    durationInFrames: JUMP_IN_DURATION,
  });

  const yOffset = interpolate(jumpIn, [0, 1], [400, 0]);

  const normalRocketRotation = rocketRotation(shots, frame) + Math.PI / 2;
  const rotation = interpolate(
    frame,
    [TIME_BEFORE_SHOOTING - 20, TIME_BEFORE_SHOOTING],
    [0, normalRocketRotation],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <svg
      {...props}
      style={{
        height: ROCKET_HEIGHT,
        width: ROCKET_WIDTH,
        position: "absolute",
        left: ROCKET_ORIGIN_X - ROCKET_WIDTH / 2,
        top: ROCKET_TOP_Y + yOffset,
        transform: `rotate(${rotation}rad)`,
        transformOrigin: `${ROCKET_WIDTH / 2}px 0`,
      }}
      viewBox="0 0 138 245"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0898 129.32L14.9898 129.34L14.7998 128.53C14.9498 128.76 15.0598 129.03 15.0898 129.32Z"
        fill="black"
      />
      <path
        d="M129.22 117.64C127.3 117.64 125.54 118.3 124.14 119.41C124.13 119.41 124.13 119.41 124.13 119.41L116.47 118.53C116.64 112.83 116.71 106.78 116.61 100.65C116.59 99.61 116.58 98.57 116.55 97.53C116.53 96.96 116.52 96.4 116.51 95.83C116.49 95.31 116.48 94.81 116.47 94.3C116.2 81.78 116.04 72.01 111.68 58.21C101.41 25.72 81.2701 7.14998 78.8701 4.37998C76.4801 1.61998 71.2501 -1.36002 66.1801 1.26998C61.1001 3.88998 39.9001 24.76 30.3401 44.91C24.4301 57.38 21.7401 79.33 20.5601 94.27V94.28C20.5301 94.7 20.4901 95.12 20.4701 95.54C20.3401 97.23 20.2301 98.82 20.1301 100.29C19.8101 105.48 19.7001 109.06 19.6801 109.86C19.6701 109.98 19.6701 110.09 19.6801 110.2L19.9801 118.36L14.2001 119.67C12.7501 118.4 10.8601 117.63 8.79008 117.63C4.25008 117.63 0.580078 121.31 0.580078 125.84C0.580078 130.06 3.75008 133.53 7.84008 134L12.3801 217.67C12.4301 218.65 13.2401 219.41 14.2301 219.41H17.5401C18.6001 219.41 19.4501 218.52 19.3901 217.45L19.3001 215.85L19.1001 212.52L19.0501 211.56L23.3801 212.55L23.9201 227.62C24.0201 230.44 26.3001 232.7 29.1201 232.79L39.9101 233.1C39.9701 233.44 40.0801 233.76 40.2401 234.09L41.9301 237.65C41.9501 237.67 41.9501 237.68 41.9501 237.68L43.9401 241.86C44.6601 243.36 46.1801 244.32 47.8401 244.32H88.5201C90.1901 244.32 91.7101 243.36 92.4201 241.86L93.6101 239.37L95.8401 234.69L104.76 234.95C107.68 235.03 110.12 232.77 110.27 229.86L111.17 212.4L115.78 211.88L115.32 215.76C115.23 216.6 115.84 217.34 116.68 217.39L120.77 217.63C121.54 217.68 122.22 217.11 122.3 216.34L131.76 133.66C135.06 132.6 137.45 129.5 137.45 125.85C137.43 121.31 133.75 117.64 129.22 117.64ZM8.90008 130.15C6.52008 130.15 4.60008 128.23 4.60008 125.85C4.60008 123.47 6.52008 121.55 8.90008 121.55C11.2801 121.55 13.2001 123.47 13.2001 125.85C13.2001 128.23 11.2801 130.15 8.90008 130.15ZM18.4501 201.8L14.3401 131.89C15.2601 131.05 15.9801 130 16.4401 128.81L20.3101 127.92L21.5801 163.33L21.6701 165.72L23.0101 202.85L18.4501 201.8ZM116.9 202.29L111.64 202.9L114.17 153.62C114.18 153.52 114.19 153.42 114.19 153.33C114.26 152.66 114.58 149.66 114.96 145.04C115.02 144.3 115.09 143.51 115.16 142.69C115.47 138.62 115.82 133.57 116.09 127.93L121.45 128.55C122.11 130.43 123.43 132.01 125.14 132.98L116.9 202.29ZM129.33 130.15C126.95 130.15 125.03 128.23 125.03 125.85C125.03 123.47 126.95 121.55 129.33 121.55C131.71 121.55 133.63 123.47 133.63 125.85C133.63 128.23 131.71 130.15 129.33 130.15Z"
        fill="url(#paint0_linear_9_1254)"
      />
      <path
        d="M116.51 95.8299C74.6599 106.68 36.7099 99.6799 20.4699 95.5399C20.3399 97.2299 20.2299 98.8199 20.1299 100.29C30.4399 102.86 48.2899 106.29 70.0099 106.29C84.2399 106.29 100.12 104.81 116.61 100.65L116.51 95.8299Z"
        fill="#707CA5"
      />
      <path
        d="M93.7105 73.7C92.8905 80.59 86.8205 83.97 83.9005 86.32C79.0905 90.19 73.7205 93.11 66.8805 92.24C63.7805 91.85 54.2305 89.88 50.4505 84.93C46.8505 80.23 42.7505 75.81 43.6005 68.82C43.9005 66.35 43.8505 51.89 56.7305 46.04C77.1505 36.76 89.5005 53.89 90.8305 55.91C92.1505 57.9 94.6805 65.64 93.7105 73.7Z"
        fill="#45547F"
      />
      <path
        d="M54.2901 79.42C49.4801 75.58 47.7802 67.42 50.2602 61.71C53.7202 53.72 60.4102 49.71 66.1502 49.97C72.4602 50.25 77.7301 52.44 82.7801 55.63C88.4701 59.22 89.7201 66.53 86.6801 72.76C84.4401 77.36 81.9001 81.23 76.7901 82.76C63.2501 86.57 56.0301 80.81 54.2901 79.42Z"
        fill="#F9F880"
      />
      <path
        d="M87.3301 38.01C86.6201 33.95 88.8301 32.5 92.6901 32.39C96.6501 32.28 97.6201 34.5 96.9801 37.78C96.3901 40.79 96.9901 44.7 91.8201 44.63C86.9601 44.56 86.8201 41.71 87.3301 38.01Z"
        fill="#FBFFFF"
      />
      <path
        d="M36.2805 84.96C35.2005 87.14 33.1905 87.33 31.1105 87.36C30.3405 86.8 29.5805 86.25 28.8105 85.69C28.0805 82.39 30.7005 81.39 32.7305 79.97C36.2905 79.95 36.1105 82.58 36.2805 84.96Z"
        fill="#F9FAFB"
      />
      <path
        d="M41.37 116.21C41.74 117.06 42.08 123.52 41.89 125.91C39.69 129.55 36.5 129.27 33.45 127.56C30.46 125.89 31.08 115.53 32.79 114.71C34.22 114.03 40.91 113.68 41.37 116.21Z"
        fill="white"
      />
      <path
        d="M39.0402 137.1C35.9202 137.58 29.1102 134.7 33.3302 131.85C35.7202 130.24 40.7502 130.03 41.8502 133.36C42.4102 135.03 40.7902 136.83 39.0402 137.1Z"
        fill="#F8F780"
      />
      <path
        d="M81.8004 202.19C81.5904 202.33 81.3804 202.47 81.2104 202.66C80.3704 203.58 80.7804 205.17 81.7604 205.94C82.7304 206.71 84.0604 206.86 85.3004 206.87C87.5404 206.88 89.9604 206.44 91.5104 204.82C92.0604 204.25 92.4904 203.42 92.2304 202.67C91.7704 201.36 89.1204 200.97 87.9304 200.71C85.9104 200.26 83.4904 201.13 81.8004 202.19Z"
        fill="#F7F586"
      />
      <path
        d="M98.5603 200.18C98.4203 199.99 98.2103 199.87 97.9903 199.78C95.8303 198.8 93.3603 199.03 90.9903 199.45C90.3603 199.56 89.8403 200.05 89.7403 200.68C89.5503 201.93 89.4603 203.2 89.4803 204.46C89.4803 204.54 89.4903 204.63 89.5403 204.69C89.6003 204.76 89.7103 204.76 89.8003 204.76C92.5603 204.72 95.3203 204.68 98.0903 204.64C98.2903 204.64 98.5103 204.63 98.6603 204.5C98.7903 204.39 98.8403 204.21 98.8803 204.05C99.1103 203.16 99.0103 202.69 98.8203 201.88C98.7203 201.4 98.8603 200.6 98.5603 200.18Z"
        fill="#F8F9F8"
      />
      <path
        d="M82.2905 188.06C81.4205 188 80.5005 187.95 79.7305 188.36C78.5505 188.98 78.1205 190.5 78.2305 191.83C78.3505 193.24 79.0205 194.7 80.2905 195.33C81.4505 195.91 82.8205 195.7 84.1005 195.52C86.9405 195.12 89.8005 194.93 92.6605 194.95C94.0805 194.96 95.4905 195.02 96.9105 194.92C97.4605 194.88 98.0305 194.81 98.4705 194.49C99.0005 194.11 99.2705 193.45 99.3205 192.8C99.3705 192.15 99.2205 191.5 99.0805 190.86C98.8305 189.74 98.4405 188.35 97.1405 188.27C95.6505 188.18 94.0505 188.4 92.5505 188.4C89.1205 188.39 85.7005 188.28 82.2905 188.06Z"
        fill="#F8F9F8"
      />
      <path
        d="M95.8196 234.7L93.5896 239.38L41.9296 237.68C41.9296 237.68 41.9197 237.67 41.9097 237.65L40.2197 234.09C40.0597 233.77 39.9496 233.44 39.8896 233.1L95.8196 234.7Z"
        fill="#45547F"
      />
      <path
        d="M61.6898 177.07V179.42H36.9198L35.1598 167.77L21.6698 165.72L21.5898 163.32L37.2298 165.72L38.9398 177.07H61.6898Z"
        fill="#707CA5"
      />
      <path
        d="M115.16 142.7C115.09 143.52 115.03 144.3 114.96 145.05H101.16V131.94H76.75V129.59H103.51V142.7H115.16Z"
        fill="#707CA5"
      />
      <path
        d="M62.8601 180.99C64.3734 180.99 65.6001 179.763 65.6001 178.25C65.6001 176.737 64.3734 175.51 62.8601 175.51C61.3469 175.51 60.1201 176.737 60.1201 178.25C60.1201 179.763 61.3469 180.99 62.8601 180.99Z"
        fill="#707CA5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9_1254"
          x1="64.9609"
          y1="7.63008"
          x2="72.9699"
          y2="242.039"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#545D9E" />
          <stop offset="0.9266" stopColor="#CEE8E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
