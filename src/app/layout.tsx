import '~/assets/styles/globals.css'

export const metadata = {
  title: 'みえるん',
  description: 'みえるんは子育て相談SNSです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}
