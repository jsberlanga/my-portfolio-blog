import { css } from '@emotion/react';
import { getMQ } from '@juliosoto/utils/styles';
import * as React from 'react';

const styles = css`
  ${getMQ('mobile')} {
    display: none;
  }
`;

const RobotMe: React.FC<any> = ({ fill = 'var(--c-text)' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 150 145"
    x="0px"
    y="0px"
    fill={fill}
    css={styles}
  >
    <path d="M72.88,40.62a1.59,1.59,0,0,0-1.58.64,2.41,2.41,0,0,0-.18,2.35,1.23,1.23,0,0,0,1.12.72h0a1.69,1.69,0,0,0,1.65-1.75C74,41.71,73.61,40.74,72.88,40.62Z" />
    <path d="M86.22,41.23a1.56,1.56,0,0,0-1.58.63,2.4,2.4,0,0,0-.19,2.36,1.23,1.23,0,0,0,1.12.71h0a1.7,1.7,0,0,0,1.66-1.75C87.31,42.31,86.94,41.34,86.22,41.23Z" />
    <path d="M70.33,128.61h0c-2.53-.89-4.84-.44-6.34,1.23a5.45,5.45,0,0,0-1,5.72,4,4,0,0,0,3.84,2.21h.33a5.32,5.32,0,0,0,5-4.36C72.55,131.3,71.84,129.38,70.33,128.61ZM65.62,133a1.57,1.57,0,0,1,.94-1.33,2,2,0,0,1,2.48.88c.26.67-.14,1.36-1,1.8a1.8,1.8,0,0,1-1.86.11A1.54,1.54,0,0,1,65.62,133Z" />
    <path d="M88.71,131.13h0c-2.61-1.62-4.52-.75-5.42-.09a5.49,5.49,0,0,0-2,5.47,3.88,3.88,0,0,0,3.5,2.91,5.92,5.92,0,0,0,.71.05,4.63,4.63,0,0,0,4.29-3.1C90.55,134.33,90.12,132.13,88.71,131.13ZM87.06,134a2.69,2.69,0,0,1-1.33,2,1,1,0,0,1-1.16,0,1,1,0,0,1-.16-1.54,2.32,2.32,0,0,1,1.76-1.08,1,1,0,0,1,.55.15.33.33,0,0,0,.14,0A.43.43,0,0,1,87.06,134Z" />
    <path d="M123.31,138.31l0-.26a52,52,0,0,0-3.81-13.43c-3.84-8.37-10-13.53-17.31-14.53a4.81,4.81,0,0,0-1.18-.19c-1.33-2.38-3.65-2.59-6.44-2.83l-.6,0a4,4,0,0,0-.89-.13c-2.24-.31-4.85-.5-6.74-.59a19.8,19.8,0,0,0,.37-2.89c0-.42.07-1.24.15-2.18a43.79,43.79,0,0,0,.24-6,22.24,22.24,0,0,0,14.37-7.62c6.25-7.35,6.07-12.38,5.78-20.71,0-.72,0-1.46-.08-2.23,0-1.77-.11-3.62-.2-5.52.7-.25,1.41-.61,1.35-1.16,0-.38-.51-.71-1.48-1-.48-7.4-1.71-15.21-5.66-21.2-2.67-4.05-8.09-6.51-12.16-7.87A50,50,0,0,0,81.49,26c0-.26.09-.5.13-.73a3.84,3.84,0,0,0,0-2.25,7,7,0,0,0,3.13-5.93,3.23,3.23,0,0,0-1.4-2.84.28.28,0,0,0-.15-.15,8.89,8.89,0,0,0-6.43.48,4.16,4.16,0,0,0-2.39,2.49,4.55,4.55,0,0,0,1.12,4A7.11,7.11,0,0,0,77.87,23a3.81,3.81,0,0,1-.37,1.37c-.11.2-.18.32-.22,1.16-1-.07-2-.11-2.88-.1a.32.32,0,0,0-.19.07H74.1c-11.78,0-20.45,9-25.88,26.86h0a1.7,1.7,0,0,0-.45,1.58Q46.19,59.46,45,66c-1.55,8.6-1.48,13.1,5.66,20.08,4.52,4.42,10.4,6.43,16.37,7.62,0,1.15,0,2.6.13,4.32.06,1,.11,1.92.13,2.72,0,.35,0,.71,0,1.07l0,.73a26.21,26.21,0,0,0,0,3.12l-1.53,0a33.82,33.82,0,0,0-5.09-.25,5.84,5.84,0,0,0-1.75-.08c-6.67.64-18.82,10.07-23.44,15.88s-10.52,17-8.93,20.78a1.86,1.86,0,0,0,1.63,1.18h.09c1.23,0,2-2.63,2.6-5.47l0-.16a33.8,33.8,0,0,1,1.15-4,17.2,17.2,0,0,0,5,1.62c-.3.74-.58,1.49-.84,2.26-.09.27-.24.67-.42,1.13-.78,2-2,4.94-1.26,6.3a1.23,1.23,0,0,0,.87.68,1.26,1.26,0,0,0,.28,0,1.68,1.68,0,0,0,1.29-.85,12.51,12.51,0,0,0,1.54-4.07v-.06h0c1.47-6.57,3.85-10.5,9.4-15.54a26.15,26.15,0,0,1,5.45-3.29l.8-.41c0,3.08,0,6.16,0,9.17,0,1.08,0,2.15,0,3.22,0,.27,0,.78,0,1.45-.23,5.93-.14,9.71,1,10.16a.8.8,0,0,0,.26,0,1.4,1.4,0,0,0,1-.61c.94-1.12,1.13-8.33.55-21.51l0-.48c0-.62-.05-1.21-.07-1.78l.45.1c3.46.56,16.74.53,23.13.52h1.85c1,0,2.35.07,4,.14,2.17.1,4.69.22,7.07.22a38.57,38.57,0,0,0,5.07-.28c-.11,2.87-.23,5.75-.36,8.56l-.27,5.91a41.4,41.4,0,0,0,.2,6.91c.33,2,1,3.24,1.87,3.24h.13c1.15-.18,1.58-2.53,1.08-5.85-.75-5-.44-10.14,0-15.85.06-.82.16-1.66.28-2.52a6.8,6.8,0,0,1,1.82.58c3.24,1.66,6.48,7.42,8.26,12.39a28,28,0,0,1,.93,4.63c.42,2.79.85,5.66,1.88,7.09.58.8,1.12,1.21,1.6,1.21a.81.81,0,0,0,.34-.08c.84-.37.92-2,.63-3.38a16.25,16.25,0,0,0-.66-2.12,17.74,17.74,0,0,1-.74-2.81c-.12-.61-.25-1.24-.41-1.81a70.43,70.43,0,0,0-2.25-7,17.43,17.43,0,0,0,4.63-2.55c.39,1.08.75,2.21,1.07,3.38a26.09,26.09,0,0,1,.56,3.37c.36,2.81.76,6,2.12,7.22a2.51,2.51,0,0,0,1.49.82.7.7,0,0,0,.38-.1C123.93,142.52,123.68,140.51,123.31,138.31Zm-16.14-16.6a24.07,24.07,0,0,0,3-4.75,13.79,13.79,0,0,1,3.22,3.18,27.4,27.4,0,0,1,2.66,4.63,12.07,12.07,0,0,0-4.8,2.5A21.9,21.9,0,0,0,107.17,121.71Zm-69.61,1.66a13,13,0,0,0,3.8,4.25,32.88,32.88,0,0,0-3.14,5,25.72,25.72,0,0,0-2.56-.84,15.08,15.08,0,0,1-2.59-.91,31.88,31.88,0,0,1,4.3-7.31Zm5.68,2a26,26,0,0,0-4-3.91,58.66,58.66,0,0,1,5.22-5.12c.37.62,1,1.55,1.93,2.93.5.73,1.07,1.57,1.4,2.1l-1.11.87-.37.29A27.09,27.09,0,0,0,43.24,125.36Zm3.62-11c.42-.33.85-.65,1.27-.95a61.13,61.13,0,0,1,6.9-4.24,19.26,19.26,0,0,0-.62,5.19c0,.48,0,.94,0,1.36,0,.71-.06,1.42-.09,2.13a12,12,0,0,0-4.12,1.83A11.39,11.39,0,0,0,46.86,114.35Zm12.26-6a4.53,4.53,0,0,0,.78-.13,5.67,5.67,0,0,1,1.8-.17c1.56.13,4.56.27,7.73.4h0c5.28.22,11,.4,11.42.41,3.72.12,9.64.6,13.12.92.49.17,1,.31,1.59.44a7,7,0,0,1,2.21.74c1.24.92,1,4.37.86,6.42q0,.53-.06.93c-3,.16-8.8.21-12.7.25l-2.24,0-3.84.06c-7.7.13-15.63.24-22.89-1C57,111.54,58,109.13,59.12,108.38ZM98.27,55.64l-.69-.07L97,55.51c-5.28-.58-10.73-1.18-16.12-1.59-6.8-.52-12.34-.82-17.46-1-1.34,0-2.75.06-4.25.15a27.38,27.38,0,0,1-8.07-.26c4.65-15,12.07-23.11,22.12-24.16h0c1.29.21,2.69.4,4.17.6,7.24,1,16.25,2.21,20.7,7.62,3.82,4.65,4.81,12.8,5.59,19.36v0C102.29,56.07,100.49,55.85,98.27,55.64Zm-48,.28a13.92,13.92,0,0,0,2.37.17h.71c3.11.12,6.28.08,9.35,0,2.19,0,4.46,0,6.68,0a161.66,161.66,0,0,1,16.56.93c1.2.14,2.94.46,5,.84a77.36,77.36,0,0,0,12.66,1.69h.6c1.46,11.25,2.47,21-8.19,28.72-6.82,5-15,4.5-22.76,3.28-7.35-1.16-15.6-2.84-20.46-8.09-7.64-8.24-5.47-16.39-2.95-25.82l.36-1.36C50.16,56.17,50.2,56.05,50.24,55.92Zm27,42.13c-2.21,0-4.47,0-6.44-.18-.09-1.25-.21-2.5-.37-3.54,1.79.28,3.56.51,5.28.73a52.92,52.92,0,0,0,6.57.46l1.43,0a17.21,17.21,0,0,0-.5,2.72C81.5,98.09,79.45,98.06,77.28,98.05ZM71,104.43s0-.05,0-.07a25.13,25.13,0,0,0,0-2.66c1.93.13,4.87.28,7.5.28a30.41,30.41,0,0,0,4.48-.25,28,28,0,0,0,.26,4.49c-3.71,0-6.53-.16-9.48-.29l-2.76-.11C71,105.41,71,105,71,104.43ZM102,113.2c.93.43,1.88.79,2.8,1.14s1.6.62,2.4,1a10.83,10.83,0,0,0-2.77,4.31,10.69,10.69,0,0,0-2.52-1A22.49,22.49,0,0,0,102,113.2ZM78.4,18.15c.11-.31.66-1,3.21-1.17,0,1.38-.33,2.31-1,2.62a1.73,1.73,0,0,1-1.82-.39A1,1,0,0,1,78.4,18.15Z" />
  </svg>
);

export default RobotMe;
