/// <reference types="react-scripts" />

// below type declaration needed for webkit use in safari - https://github.com/microsoft/TypeScript/issues/31686
interface Window {
  webkitAudioContext: typeof AudioContext;
}
