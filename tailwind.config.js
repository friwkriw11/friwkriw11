/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {

      //colors

      'background_color':{ 100:'#EFEFF4'},
      'white':{ 100:'#FFFFFF'},
      'primary_blue':{ 100:'#3741D7'},
      'subtle_primary':{ 100:'#E1E2F0'},
      'text_field_color':{ 100:'#E0E1F3'},
      'text_fields_arrow_square':{ 100:'#BBBBBB'},
      'active_text_fields_fill':{ 100:'#D4D5E7'},
      'active_text_field_stroke':{100:'#25041E'},
      'text_fields_labels_color':{ 100:'#606060'},
      'text_fields_place_holder':{ 100:'#919191'},

    }
  },
  plugins: [],
}