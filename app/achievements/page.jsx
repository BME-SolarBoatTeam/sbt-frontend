import AchievementsContainer from '../_components/(Achievements)/AchievementsContainer';
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
export const metadata = {
  title: 'Eredmények',
  description: 'Elért eredményeink az elmúlt években.',
};

const Page = () => {
  return (
    <PageLayout>
      <h1 className="my-6 text-center text-xl lg:mb-12 lg:pt-12 lg:text-3xl">
        Az évek alatt elért
        <span className="bg-linear-to-r from-[#00FF4D] to-[#00A6FF] bg-clip-text font-semibold text-transparent">
          {' '}
          eredményeink
        </span>
        .
      </h1>
      <AchievementsContainer />
    </PageLayout>
  );
};

export default Page;
