/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  // purge: [
  //   './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  // ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
        'yuzu': '#ffe24a',
        'mandarin': '#ffbf1c',
        'lime': '#cfff48',
        'grapefruit': '#f4ae90',
        'lemon': '#fffd93'
      },
      fontFamily: {
        MierunDefault: [ 'Hiragino Sans','ヒラギノ角ゴシック','メイリオ','Meiryo'],
        KiwiMaru: ["var(--font-KiwiMaru)"],
      },
      plugins: [
        require('@tailwindcss/line-clamp'),
        // ...
      ],
    },
  },
}
