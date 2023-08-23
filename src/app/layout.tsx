import { Kiwi_Maru } from "next/font/google";
import 'semantic-ui-css/semantic.min.css';
import '~/assets/styles/globals.css';

export const KiwiMaru = Kiwi_Maru(
  {
    weight: '400',
    subsets: ['latin']
  }
)

export const metadata = {
  title: 'みえるん',
  description: 'みえるんは子育て相談SNSです。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${KiwiMaru.className}  font-KiwiMaru`}>
        <main className={"min-h-screen bg-background"}>{children}</main>
      </body>
    </html>
  );
}
