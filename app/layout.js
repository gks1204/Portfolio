
import './styles/globals.css';

export const metadata = {
  title: 'Nishima Oberoi | UX UI Designer',
  description: 'Portfolio of Nishima Oberoi - UX/UI & Graphic Designer'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
