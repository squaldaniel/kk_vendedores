export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { premium: '0 24px 70px rgba(16,35,63,.18)' },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(135deg,#10233F 0%,#174EA6 58%,#D4A72C 160%)',
        'gold-gradient': 'linear-gradient(135deg,#B8860B 0%,#F4C95D 48%,#D4A72C 100%)'
      }
    }
  }
}