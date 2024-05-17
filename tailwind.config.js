
/*

Run this command before making edits: 
npx tailwindcss -i ./input.css -o ./output.css --watch

*/


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      "mobile": "375px",
      "desktop": "1440px",
      "large": "800px"
    },

    fontFamily: {
      "main": "Hanken Grotesk",
    },
    fontWeight: {
      "normal": "500",
      "heavy": "700",
      "extra-heavy": "800",
    },
    extend: {
      colors: {

      // Main Colors
      "light-red": "hsl(0, 100%, 67%)",
      "orangey-yellow": "hsl(39, 100%, 56%)",
      "green-teal": "hsl(166, 100%, 37%)",
      "cobalt-blue": "hsl(234, 85%, 45%)",

      //Colors inside Gradient

      //bg
      "light-slate-blue": "hsl(252, 100%, 67%)",
      "light-royal-blue": "hsl(241, 81%, 54%)",

        //circle
      "violet-blue": "hsla(256, 72%, 46%, 1)",
      "persian-blue": "hsla(241, 72%, 46%, 0)"
    },
  },
    },
    
  plugins: [],
}

