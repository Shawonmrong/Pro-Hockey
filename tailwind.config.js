/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  // Initialization for ES Users
import {
    Input,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Input, Ripple });