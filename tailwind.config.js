import daisyui from 'daisyui'

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
  },
  daisyui: {
    themes: [{ premium: { primary: '#174EA6', secondary: '#D4A72C', accent: '#F4C95D', neutral: '#10233F', 'base-100': '#FFFFFF', 'base-200': '#F4F7FB', 'base-300': '#E3EAF3', info: '#3B82F6', success: '#16A34A', warning: '#D97706', error: '#DC2626' } }]
  },
  plugins: [daisyui]
}
