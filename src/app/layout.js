import './globals.css';

export const metadata = {
  title: 'SoulHeal',
  description: 'Be Healthy',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
