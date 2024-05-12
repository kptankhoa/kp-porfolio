import { Hero } from '@components';
import { summaryData } from '@data';

export default function Home() {

  return (
    <Hero
      id={summaryData.id}
      img={summaryData.img}
      description={summaryData.description}
      typewriter={summaryData.iAm}
    />
  );
}
