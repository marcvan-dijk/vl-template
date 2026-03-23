import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const AboutContent = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 pt-0 mb-20 mob:p-4`}
    >
      <h1 className="text-3xl">Welkom bij De Vlietlanden</h1>
      <p className="mt-5 opacity-40 text-xl">
        Een bijzondere plek aan het water, waar rust, natuur en samen wonen centraal staan. De Vlietlanden ligt in Wervershoof, in de gemeente Medemblik. Wat ooit begon als een bungalowpark, is in de loop der jaren uitgegroeid tot een volwaardige woonkern. Vandaag de dag wonen hier zo’n 500 mensen, verdeeld over 275 woningen. Wat ons verbindt, is de unieke omgeving. Wonen aan het water, veel groen om ons heen, ruimte en stilte – het draagt allemaal bij aan een prettig en ontspannen leven. Vanuit huis lopen we zo richting het IJsselmeer of maken we een wandeling of fietstocht in de natuur.
      </p>
      <p className="mt-5 opacity-40 text-xl">
        Maar De Vlietlanden is meer dan alleen een mooie plek. Het is een gemeenschap. Jong en oud, gezinnen en alleenstaanden – iedereen vindt hier zijn plek. Bewoners zoeken elkaar op, organiseren activiteiten en helpen elkaar waar nodig. Nabuurschap krijgt hier echt de ruimte. Met de overname in 2026 zijn de infrastructuur van de woonkern en de besloten vennootschap De Vlietlanden eigendom geworden van Stichting De Vlietlanden. Samen werken we aan een duurzame toekomst, waarin leefbaarheid, verbondenheid en kwaliteit van wonen centraal staan.      </p>
      <p className="mt-5 opacity-40 text-xl">
        De Vlietlanden is een plek waar je niet alleen woont, maar ook samen leeft.
      </p>
    </div>
  );
};

export default AboutContent;
