// import { Button, Card } from "@thirdbracket/core";

import { Bracket } from "@thirdbracket/bracketui";
import HeroSection from "../../components/HeroSection";
import { FeatureOne } from "../../components/FeatureOne";
import { FeatureTwo } from "../../components/FeatureTwo";
import Subscription from "../../components/Subscription";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <HeroSection />

        <FeatureOne />
        <FeatureTwo />

        <Subscription />
      </Bracket>
    </main>
  );
}
