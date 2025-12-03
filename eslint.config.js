export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        navigator: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        fetch: "readonly",
        WebSocket: "readonly",
        AudioContext: "readonly",
        MediaRecorder: "readonly",
        URL: "readonly",
        Blob: "readonly",
        FileReader: "readonly",
        // Add other browser globals as needed
      },
    },
  },
];
