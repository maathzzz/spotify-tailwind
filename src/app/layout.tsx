import './globals.css'

export const metadata = {
  title: 'Spotify w/ Tailwind',
  description: 'Listen to music.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/spotify-logo.svg" />
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}
