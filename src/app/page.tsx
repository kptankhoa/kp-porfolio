import { About, Header } from "@components";
import { summaryData } from "@data";

export default function Home() {

  return (
    <main>
      <Header
        firstName={summaryData.firstName}
        lastName={summaryData.lastName}
      />
      <About
        img={summaryData.img}
      />
    </main>
  );
}
