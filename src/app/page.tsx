import { Hero, Header, CircleCursor } from '@components';
import { summaryData } from '@data';

export default function Home() {

  return (
    <main>
      <CircleCursor />
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
