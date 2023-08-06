import Link from "next/link";
import Image from "next/image";
import animation from "../public/images/loading.gif";
export default function Preload() {
  return (
    <>
      <main className="alcentre" style={{ width: "100vw", height: "100vh" }}>
        <Image
          src={animation}
          width={640}
          height={480}
          alt={"Loading animation"}
        ></Image>
      </main>
      {/* <svg
          width="361"
          height="180"
          viewBox="0 0 361 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4_38)">
            <path
              d="M144.087 83.0253C142.195 84.7709 141.199 81.4729 140.026 80.2701C134.213 74.3079 124.026 78.6151 118.856 83.4938C111.235 90.6843 120.019 95.016 127.286 92.8514C135.733 90.335 144.059 86.3707 151.128 81.0861C154.774 78.36 162.497 72.1355 160.804 66.5173C159.091 60.835 150.416 60.784 145.927 61.4075C133.81 63.0902 121.203 68.2441 110.38 73.7832C90.2532 84.0841 72.1271 99.345 54.1381 112.805C43.6366 120.663 31.5745 129.782 21.0697 137.951C19.469 139.196 6.87575 147.26 5.94452 151.245C5.57479 152.828 9.26516 151.56 10.8164 151.076C16.2808 149.372 26.1037 145.17 30.564 143.24C58.2665 131.254 85.4311 118.11 113.554 107.102C155.407 90.7205 198.026 75.818 241.348 63.8031C279.344 53.2653 317.318 46.3687 356.324 41.5787"
              stroke="black"
              strokeWidth={5}
              strokeLinecap="round"
              className="svg-elem-1"
            ></path>
            <path
              d="M215.338 62.4836C217.521 59.9657 220.542 58.528 222.945 56.2051C223.836 55.3446 225.013 53.9436 223.173 55.5722C220.805 57.6683 218.504 59.8807 216.259 62.1073C216.147 62.2188 213.175 64.9012 213.744 65.3274C215.136 66.3693 219.141 62.0558 219.807 61.3229C226.891 53.533 233.058 44.1498 237.514 34.6488C237.681 34.2934 240.194 29.6345 239.684 28.9801C239.123 28.2601 235.339 34.1585 235.291 34.241C233.786 36.8353 222.621 55.3527 226.732 57.003C228.598 57.7519 231.708 56.438 233.386 55.8017C237.914 54.0851 242.246 51.5557 246.404 49.0934C247.9 48.2078 252.108 45.1204 250.66 46.0805C248.374 47.5953 246.274 49.3796 244.106 51.0521C242.544 52.2566 239.742 53.7395 238.862 55.6401C238.599 56.2075 243.98 54.2185 244.341 54.0415C248.12 52.1875 258.663 45.2622 254.838 47.0208C253.591 47.5945 248.253 51.983 252.144 51.8609C254.851 51.7759 257.565 50.4132 259.97 49.2906C261.098 48.7638 262.86 47.291 264.154 47.2669C264.339 47.2635 263.227 48.4664 263.159 48.5428C262.26 49.5572 264.3 49.1746 264.787 49.1113C265.92 48.9641 270.818 46.6345 271.137 47.6762C271.459 48.7303 276.317 47.4639 276.908 47.3295C278.11 47.0564 279.598 46.4904 280.85 46.8072C283.93 47.586 286.214 47.572 289.428 47.6359"
              stroke="black"
              strokeWidth={5}
              strokeLinecap="square"
              className="svg-elem-2"
            ></path>
            <path
              d="M161.305 118.469C163.578 113.943 165.578 109.267 168.532 105.128C170.986 101.69 169.943 108.381 169.776 109.834C169.381 113.286 172.828 110.581 174.039 109.223C174.689 108.495 180.024 101.817 180.291 102.366C181.134 104.102 180.698 105.514 183.284 104.199C185.697 102.971 188.573 98.2048 190.965 97.784C192.12 97.581 191.067 101.304 192.679 101.021C196.425 100.362 196.995 95.4491 199.888 94.4809C200.158 94.3907 200.37 97.2007 201.988 96.9557C205.047 96.4927 205.944 93.5344 208.154 91.7789C209.075 91.0467 208.604 92.8187 209.681 92.9671C212.806 93.3978 214.224 90.7344 216.518 89.441C218.38 88.3912 222.684 83.9887 224.745 84.3525C225.823 84.5428 223.508 88.667 225.037 89.3651C229.444 91.3767 232.119 82.2929 235.987 81.6127"
              stroke="black"
              strokeWidth={5}
              strokeLinecap="round"
              className="svg-elem-3"
            ></path>
            <path
              d="M237.847 75.6323L237.232 75.6437"
              stroke="black"
              strokeWidth={5}
              strokeLinecap="round"
              className="svg-elem-4"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_4_38">
              <rect
                width="180"
                height="361"
                fill="white"
                transform="matrix(0 -1 1 0 0 180)"
                className="svg-elem-5"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </main>
      <style>
        {`
@-webkit-keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 651.12255859375px;
    stroke-dasharray: 651.12255859375px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 651.12255859375px;
  }
}

@keyframes animate-svg-stroke-1 {
  0% {
    stroke-dashoffset: 651.12255859375px;
    stroke-dasharray: 651.12255859375px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 651.12255859375px;
  }
}

.svg-elem-1 {
  -webkit-animation: animate-svg-stroke-1 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s both;
          animation: animate-svg-stroke-1 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s both;
}

@-webkit-keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 220.07797241210938px;
    stroke-dasharray: 220.07797241210938px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 220.07797241210938px;
  }
}

@keyframes animate-svg-stroke-2 {
  0% {
    stroke-dashoffset: 220.07797241210938px;
    stroke-dasharray: 220.07797241210938px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 220.07797241210938px;
  }
}

.svg-elem-2 {
  -webkit-animation: animate-svg-stroke-2 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.12s both;
          animation: animate-svg-stroke-2 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.12s both;
}

@-webkit-keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 120.68257141113281px;
    stroke-dasharray: 120.68257141113281px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 120.68257141113281px;
  }
}

@keyframes animate-svg-stroke-3 {
  0% {
    stroke-dashoffset: 120.68257141113281px;
    stroke-dasharray: 120.68257141113281px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 120.68257141113281px;
  }
}

.svg-elem-3 {
  -webkit-animation: animate-svg-stroke-3 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.24s both;
          animation: animate-svg-stroke-3 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.24s both;
}

@-webkit-keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 2.6151111125946045px;
    stroke-dasharray: 2.6151111125946045px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 2.6151111125946045px;
  }
}

@keyframes animate-svg-stroke-4 {
  0% {
    stroke-dashoffset: 2.6151111125946045px;
    stroke-dasharray: 2.6151111125946045px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 2.6151111125946045px;
  }
}

.svg-elem-4 {
  -webkit-animation: animate-svg-stroke-4 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.36s both;
          animation: animate-svg-stroke-4 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.36s both;
}

@-webkit-keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 1084px;
    stroke-dasharray: 1084px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1084px;
  }
}

@keyframes animate-svg-stroke-5 {
  0% {
    stroke-dashoffset: 1084px;
    stroke-dasharray: 1084px;
  }

  100% {
    stroke-dashoffset: 0;
    stroke-dasharray: 1084px;
  }
}

.svg-elem-5 {
  -webkit-animation: animate-svg-stroke-5 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.48s both;
          animation: animate-svg-stroke-5 2s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0.48s both;
}

`}
      </style> */}
    </>
  );
}
