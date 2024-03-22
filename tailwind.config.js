/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '425px',
      // => @media (min-width: 425px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        'xs': {'min':'320px','max':'425px'},
        // => @media (min-width: 992px) { ... }
      },
      colors:{
        "my-color":"rgba(40,27,16,0.8)",
        "welcome":"rgba(209, 110, 67, 1)",
        "about":"rgba(196, 196, 196, 1)",
        "deal":"rgba(184, 163, 186, 1)",
        "subs":"rgba(0,0,0,0.9)",
        // "subs1":"rgba(0,0,0,0.9)",
        "sub-color":"rgba(187, 166, 166, 1)",
        "book-now":"rgba(255, 171, 8, 1)",
        "feedback":" rgba(255, 255, 255, 0.3)",
        "deals":"rgba(228, 255, 253, 0.75)",
        "dealCode":"rgba(191, 255, 251, 0.46)",
        "menu-bgcolor":"rgba(37, 26, 23, 1)",
        "plus-icon":" rgba(120, 235, 123,1)",
        "lines":"rgba(60, 45, 37, 1)",
        "explore":"rgba(203, 95, 95, 1)",
        "menu1":"rgba(37, 35, 35, 1)",
        "shadow":"rgba(0, 0, 0, 0.25)"
            },
            fontFamily:{
              "sans": ['ui-sans-serif', 'system-ui','Josefin Sans'],
              "display":['Playfair Display' ,'Oswald'],
              "inter":['Inter'],
              "cafe":['Inspiration'],
            },
            margin:{
              "20px":"100px",
            },
            borderRadius:{
              "extralarge":"1000rem",
            },
            backgroundImage: {
              'Sub': "url('./')",
            },
            dropShadow: {
              '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            }
    },
  },
  plugins: [],
}

