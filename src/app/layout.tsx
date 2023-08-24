import { Kiwi_Maru } from 'next/font/google';
import 'semantic-ui-css/semantic.min.css';
import '~/assets/styles/globals.css';
import { Layout } from '~/components/layout';

export const KiwiMaru = Kiwi_Maru({
  weight: '400',
  subsets: ['latin'],
});

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
      <body className={KiwiMaru.className}>
        <Layout>
          <main className='flex w-full'>{children}</main>
        </Layout>
      </body>
    </html>
  );
}
