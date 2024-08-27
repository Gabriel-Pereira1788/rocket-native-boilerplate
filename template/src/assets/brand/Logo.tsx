import React from 'react';

import { Path, Rect, Svg } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
};

export function Logo({ width = 250, height = 350, color = '#000' }: Props) {
  return (
    <Svg
      viewBox="1.7103699445724487 1.4981969594955444 322.1723937988281 582.2988891601562"
      width={width}
      height={height}>
      <Path
        fill="#000"
        d="&#10;  M 256.96 223.38&#10;  Q 261.42 233.26 263.07 236.19&#10;  Q 266.55 242.37 279.35 263.42&#10;  Q 289.66 280.36 299.95 297.30&#10;  Q 301.73 300.23 310.17 314.49&#10;  Q 315.96 324.28 323.57 336.21&#10;  Q 324.47 337.64 322.78 337.61&#10;  Q 311.83 337.42 290.00 337.41&#10;  Q 31.53 337.26 1.97 337.31&#10;  A 0.27 0.26 -76.1 0 1 1.74 336.92&#10;  Q 4.18 332.17 6.97 327.72&#10;  Q 12.98 318.14 27.01 295.10&#10;  Q 27.09 294.96 36.44 278.97&#10;  Q 40.76 271.57 42.95 268.34&#10;  Q 47.41 261.72 49.65 257.85&#10;  Q 54.84 248.88 63.64 234.40&#10;  Q 65.50 231.35 67.45 226.74&#10;  Q 68.27 224.80 68.04 222.70&#10;  Q 65.49 198.70 68.68 177.06&#10;  Q 72.02 154.44 79.25 134.05&#10;  Q 83.19 122.95 87.85 112.14&#10;  Q 91.46 103.78 99.39 88.43&#10;  Q 103.74 80.01 109.33 71.08&#10;  Q 122.12 50.63 136.54 31.78&#10;  Q 139.37 28.08 148.98 16.80&#10;  C 153.43 11.57 158.39 6.97 162.16 1.67&#10;  A 0.42 0.41 41.0 0 1 162.80 1.63&#10;  C 176.73 16.57 188.99 30.56 200.25 46.54&#10;  Q 216.91 70.19 228.36 92.24&#10;  Q 237.85 110.50 242.20 122.77&#10;  Q 250.05 144.87 252.70 154.56&#10;  Q 253.79 158.57 255.72 168.00&#10;  Q 257.34 175.89 257.92 181.58&#10;  Q 259.31 195.37 258.48 210.28&#10;  Q 258.14 216.32 256.86 222.42&#10;  Q 256.75 222.92 256.96 223.38&#10;  Z&#10;  M 185.58 54.62&#10;  Q 175.49 39.89 163.07 27.65&#10;  A 0.69 0.68 -44.1 0 0 162.13 27.64&#10;  C 159.86 29.80 157.49 32.07 155.49 34.64&#10;  Q 144.88 48.27 140.80 53.55&#10;  Q 134.47 61.75 132.13 67.20&#10;  A 0.73 0.73 0.0 0 0 132.73 68.21&#10;  Q 134.36 68.36 136.25 68.36&#10;  Q 164.82 68.37 193.50 68.33&#10;  A 0.52 0.51 76.4 0 0 193.95 67.58&#10;  C 191.58 62.94 187.93 58.05 185.58 54.62&#10;  Z&#10;  M 162.79 320.63&#10;  Q 182.91 320.62 187.25 320.66&#10;  Q 188.98 320.67 189.80 319.77&#10;  Q 207.39 300.59 220.05 278.06&#10;  C 224.91 269.43 228.72 260.44 232.16 251.08&#10;  Q 246.94 210.73 238.55 168.91&#10;  Q 233.36 143.08 221.85 117.62&#10;  Q 217.69 108.43 206.08 86.81&#10;  C 205.44 85.62 204.56 84.93 203.31 84.86&#10;  Q 199.85 84.67 198.00 84.68&#10;  Q 180.38 84.78 162.76 84.78&#10;  Q 145.15 84.78 127.53 84.69&#10;  Q 125.68 84.68 122.22 84.87&#10;  C 120.97 84.94 120.09 85.63 119.45 86.82&#10;  Q 107.84 108.44 103.68 117.63&#10;  Q 92.18 143.09 86.99 168.92&#10;  Q 78.61 210.75 93.40 251.09&#10;  C 96.84 260.45 100.65 269.44 105.52 278.07&#10;  Q 118.18 300.60 135.77 319.78&#10;  Q 136.59 320.68 138.32 320.66&#10;  Q 142.66 320.62 162.79 320.63&#10;  Z&#10;  M 74.44 247.78&#10;  Q 72.63 251.68 72.02 252.75&#10;  C 65.41 264.46 56.38 278.62 49.19 290.89&#10;  Q 45.69 296.85 37.07 310.84&#10;  Q 35.43 313.50 32.56 319.73&#10;  A 0.43 0.42 12.4 0 0 32.95 320.33&#10;  L 113.12 320.33&#10;  A 0.55 0.55 0.0 0 0 113.55 319.43&#10;  Q 109.27 314.18 105.37 309.21&#10;  Q 101.96 304.86 97.98 298.54&#10;  Q 84.00 276.36 75.77 251.75&#10;  C 75.32 250.42 75.25 249.14 74.93 247.83&#10;  Q 74.75 247.10 74.44 247.78&#10;  Z&#10;  M 250.99 248.75&#10;  Q 250.65 248.20 250.44 248.82&#10;  Q 249.46 251.69 245.12 263.68&#10;  Q 242.40 271.19 238.76 278.08&#10;  Q 231.59 291.65 227.39 298.82&#10;  C 223.87 304.83 219.23 310.60 214.72 316.74&#10;  Q 213.79 318.01 211.99 319.80&#10;  Q 211.43 320.34 212.21 320.34&#10;  L 293.33 320.34&#10;  A 0.41 0.41 0.0 0 0 293.67 319.70&#10;  C 291.76 316.87 290.11 313.57 288.49 311.07&#10;  Q 283.15 302.87 270.17 280.84&#10;  C 267.51 276.31 263.21 270.12 260.30 264.77&#10;  Q 255.99 256.86 250.99 248.75&#10;  Z"
        data-c-fill="000000"
      />
      <Path
        fill="#000"
        d="&#10;  M 206.89 181.13&#10;  A 43.73 43.73 0.0 0 1 163.16 224.86&#10;  A 43.73 43.73 0.0 0 1 119.43 181.13&#10;  A 43.73 43.73 0.0 0 1 163.16 137.40&#10;  A 43.73 43.73 0.0 0 1 206.89 181.13&#10;  Z&#10;  M 189.65 181.21&#10;  A 26.47 26.47 0.0 0 0 163.18 154.74&#10;  A 26.47 26.47 0.0 0 0 136.71 181.21&#10;  A 26.47 26.47 0.0 0 0 163.18 207.68&#10;  A 26.47 26.47 0.0 0 0 189.65 181.21&#10;  Z"
        data-c-fill="000000"
      />
      <Rect
        fill="#000"
        x="153.33"
        y="367.67"
        width="18.32"
        height="65.68"
        rx="0.52"
        data-c-fill="000000"
      />
      <Path
        fill="#000"
        d="&#10;  M 163.34 555.41&#10;  Q 185.69 517.99 193.05 475.62&#10;  Q 195.10 463.82 195.93 446.73&#10;  Q 196.37 437.69 196.38 426.75&#10;  Q 196.39 387.07 196.44 383.74&#10;  Q 196.45 383.14 197.05 383.14&#10;  L 212.65 383.14&#10;  A 0.70 0.70 0.0 0 1 213.35 383.84&#10;  Q 213.40 426.31 213.29 435.25&#10;  Q 213.13 447.62 211.45 464.56&#10;  Q 210.46 474.49 208.42 484.34&#10;  Q 203.22 509.35 193.93 532.26&#10;  Q 191.03 539.43 185.17 550.19&#10;  C 177.74 563.86 172.22 573.75 162.99 583.69&#10;  A 0.34 0.33 -43.4 0 1 162.49 583.68&#10;  Q 160.51 581.28 157.96 579.29&#10;  Q 155.96 577.72 152.42 571.88&#10;  Q 151.00 569.55 140.18 550.65&#10;  Q 134.41 540.56 131.30 532.79&#10;  Q 122.91 511.84 118.94 495.63&#10;  Q 112.97 471.21 112.00 442.76&#10;  Q 111.22 420.21 111.77 384.05&#10;  A 0.72 0.72 0.0 0 1 112.49 383.34&#10;  L 128.03 383.34&#10;  Q 128.79 383.34 128.78 384.10&#10;  Q 128.64 418.69 128.73 437.27&#10;  Q 128.79 452.48 131.96 474.39&#10;  Q 133.49 484.99 135.88 493.99&#10;  Q 142.61 519.37 154.43 542.64&#10;  Q 157.79 549.26 162.48 555.46&#10;  A 0.52 0.51 -48.0 0 0 163.34 555.41&#10;  Z"
        data-c-fill="000000"
      />
    </Svg>
  );
}
