import { Hero, Header } from '@components';
import { summaryData } from '@data';

export default function Home() {

  return (
    <main>
      <Header
        firstName={summaryData.firstName}
        lastName={summaryData.lastName}
        resume={summaryData.resumeUrl}
      />
      <Hero
        img={summaryData.img}
        description={summaryData.description}
        typewriter={summaryData.iAm}
      />
    </main>
  );
}
