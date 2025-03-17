import PageLayout from '../_components/(Layouts)/PageLayout';

/*
  @  create informations  @
  Helyezés - Csak az elert helyezes szam (number)
  Helyszín - Esemeny helyszíne (string)
  Datum    - Mikor tortent az esemény (date)
  Esemény  - Mi az esemény (string)
  Kép      - Az eseményhez tartozó kép (image | [string (path to image)])
*/

/*
  Tovabbi esemenyek => 2 param lenne: ?start=0&end=3
  > az elso 3-at lekerdezi az adatbazisbol.

  Ha: ?start=3&end=6
  > a kovetkezo 3-at lekerdezi az adatbazisbol. (stb...)

  Endpoint URL => /api/achievement/all?start=0&end=3
  Letrehozas URL => /api/achievement/create (line:4) [image destination: /cdn/achievements/(img url)]
  Torles URL => /api/achievement/delete (body: id)

  (?) Modositas URL => /api/achievement/update (body: id, data)
*/

const Page = () => {
  return (
    <PageLayout>
      <h1 className="pt-12 text-center text-xl lg:text-3xl">
        Az évek alatt elért
        <span className="bg-linear-to-r from-[#00FF4D] to-[#00A6FF] bg-clip-text font-semibold text-transparent">
          {' '}
          eredményeink
        </span>
        .
      </h1>
      <p className="text-center font-mono italic">Coming soon...</p>
    </PageLayout>
  );
};

export default Page;
