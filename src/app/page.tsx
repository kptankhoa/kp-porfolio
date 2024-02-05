import { Header } from "@components";
import { summaryData } from "@data";

export default function Home() {

  return (
    <main>
      <Header
        firstName={summaryData.firstName}
        lastName={summaryData.lastName}
      />
    </main>
  );
}
