export const noisyBackground = `
   body {
     &::after {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(/images/common/noise.webp);
      opacity: 0.04;
      z-index: 999;
      pointer-events: none;
    }
  }
`;
