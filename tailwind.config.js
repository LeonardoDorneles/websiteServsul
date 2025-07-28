/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Importante para escanear componentes em src
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to right, #2563EB, #3B82F6)', // Exemplo de gradiente de fundo
      },
      textShadow: {
        glow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
      },
      // Aqui você pode adicionar outras cores customizadas se estiver usando no formato hsl(var(--...))
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Seus gradientes personalizados (se definidos com variáveis, caso contrário, direto no backgroundImage)
        'gradient-primary': 'linear-gradient(135deg, hsl(215 98% 15%), hsl(215 85% 25%))',
        'gradient-hero': 'linear-gradient(135deg, hsl(215 98% 15%), hsl(215 85% 35%))',
        'gradient-card': 'linear-gradient(145deg, hsl(0 0% 100%), hsl(210 40% 98%))',
      },
       boxShadow: {
        card: '0 4px 20px -2px hsl(215 98% 15% / 0.08)',
        hover: '0 8px 30px -4px hsl(215 98% 15% / 0.15)',
        glow: '0 0 40px hsl(215 85% 35% / 0.3)',
      },
    },
  },
  plugins: [],
};