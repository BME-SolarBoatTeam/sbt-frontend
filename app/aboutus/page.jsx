// app/aboutus/page.jsx
import Image from 'next/image';
import PageLayout from '../_components/(Layouts)/PageLayout';
import AchievementsContainer from '../_components/(Achievements)/AchievementsContainer';
import RoleCard from '../_components/(About)/RoleCard';

export const metadata = {
  title: 'Rólunk',
  description: 'Kik vagyunk, csapatunk felépítése, versenyeink és eredményeink.',
};

export default function Page() {
  return (
    <PageLayout className="mx-auto grid w-full gap-20 lg:gap-28">
      {/* --- Hero / Cím --- */}
      <header className="pt-10 text-center">
        <h1 className="relative mx-auto max-w-4xl text-3xl font-black tracking-tight lg:text-6xl">
          <span className="relative inline-block">
            <span
              className="
                relative z-10 bg-gradient-to-r
                from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
                dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
                bg-clip-text text-transparent
              "
            >
              Ismerd meg a csapatot!
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-2xl opacity-80">
          Küldetésünk, szervezeti felépítésünk, versenyeink és eredményeink egy helyen.
        </p>
      </header>

      {/* --- 1) Kik vagyunk mi --- */}
      <section id="kik-vagyunk-mi" className="mx-auto w-full max-w-5xl">
        <h2 className="mb-4 text-center text-xl font-semibold lg:text-3xl">
          <span
            className="
              relative z-10 bg-gradient-to-r
              from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
              dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
              bg-clip-text text-transparent
            "
          >
            Kik vagyunk mi?
          </span>
        </h2>
        <div className="mt-7">
          <Figure src="/images/about/hero.jpg" alt="Csapatkép" />
        </div>
        <div className="mx-auto max-w-3xl text-center space-y-4 leading-relaxed opacity-90 px-4 sm:px-6 lg:px-0">
          <p>
            A BME Solar Boat Team egy 2014-ben alakult versenycsapat, ami három gépészmérnök hallgató kezdeményezéseinek eredménye.
            Elsődleges céljuk az volt, hogy egy ember által vezetett, kizárólag napenergiával működő versenyhajót építsenek.
            A csapatban mindig fontos szerepet kapott a folyamatos fejlődés, így idővel a különböző szakokról csatlakozó hallgatók együttműködése is.
            Mára már a 3. generációs hajónk tervein dolgozik a társaság minden tagja.
          </p>

          <p>
            Célunk a nemzetközi versenyeken való eredményes részvétel, mindez szem előtt tartva a környezetbarátságot és népszerűsítve a fenntartható technológiákat.
            Megalakulásunk óta számos nemzetközi és hazai versenyt tudhatunk magunk mögött, kiemelkedő eredményekkel.
            Németországban és Monacóban is dobogós helyezéseket értünk el Lanával, a második generációs hajónkkal,
            azonban minden tudásunkkal arra törekszünk, hogy ennél is jobbak legyünk, hiszen versenycsapatunknak hosszútávú tervei vannak.
          </p>

          <p>
            Számunkra a hajóépítés nem csupán mérnöki kihívás, hanem lehetőség arra is, hogy megmutassuk:
            a megújuló energia és az innováció kéz a kézben járhat.
            Fejlesztéseink során nagy hangsúlyt fektetünk a csapatmunkára, a kreatív problémamegoldásra és az új technológiák, illetve ötletek kipróbálására.
            Hisszük, hogy az egyetemi évek alatt megszerzett tapasztalataink nemcsak a versenypályán, hanem az egyetemen túlmutatóan is kamatozni fognak majd.
          </p>
        </div>  

      </section>

      {/* --- 2) Csapatunk felépítése --- */}
      <section id="csapatunk-felepitese" className="mx-auto w-full max-w-6xl">
        <h2 className="mb-4 text-center text-xl font-semibold lg:text-3xl">
          <span
            className="
              relative z-10 bg-gradient-to-r
              from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
              dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
              bg-clip-text text-transparent
            "
          >
            Csapatunk felépítése
          </span>
        </h2>

        <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-0">
          {/* Gépészet */}
          <div
            className="
              rounded-3xl ring-1 ring-black/10 dark:ring-white/15 p-4 sm:p-6 lg:p-8
              bg-gradient-to-r
              from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
              dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
              text-white
            "
          >
            <RoleCard
              title="Gépészet"
              description="A gépészeti csoport felelős a hajó konstrukciójáért, anyagtechnológiáért és szimulációkért. Feladataik közé tartozik a kompozit szerkezet fejlesztése, valamint gyártási folyamatok kivitelezése."
              images={[
                { src: '/images/team/gepeszet/1.jpg', alt: 'Szimuláció' },
                { src: '/images/team/gepeszet/2.jpg', alt: 'Gyártás' },
                { src: '/images/team/gepeszet/3.jpg', alt: 'Laminálás' },
              ]}
            />
          </div>

          {/* Elektrotechnika */}
          <div
            className="
              rounded-3xl ring-1 ring-black/10 dark:ring-white/15 p-4 sm:p-6 lg:p-8
              bg-gradient-to-r
              from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
              dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
              text-white
            "
          >
            <RoleCard
              title="Elektrotechnika"
              description="Az elektronikai csoport foglalkozik a hajó elektromos rendszereinek és vezérlésének tervezésével, kivitelezésével, valamint az informatika és elektrotechnika területeivel. Ide tartozik a napelemes energiaellátás, a hajtásrendszer irányítása, az érzékelők és fedélzeti elektronika fejlesztése is."
              images={[
                { src: '/images/team/elektro/1.jpg', alt: 'PCB tervezés' },
                { src: '/images/team/elektro/2.jpg', alt: 'Forrasztás és mérés' },
                { src: '/images/team/elektro/3.jpg', alt: 'Telemetria teszt' },
              ]}
            />
          </div>

          {/* Gazdaság */}
          <div
            className="
              rounded-3xl ring-1 ring-black/10 dark:ring-white/15 p-4 sm:p-6 lg:p-8
              bg-gradient-to-r
              from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
              dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
              text-white
            "
          >
            <RoleCard
              title="Gazdaság"
              description="A gazdasági csoport felel a marketing, pénzügyi ügyek lebonyolításáért. Ők gondoskodnak a szponzori kapcsolatok kiépítéséről, a csapat működéséhez szükséges források előteremtéséről, továbbá ők szervezik a külső kommunikációt és a csapat promócióját."
              images={[
                { src: '/images/team/gazdasag/1.jpg', alt: 'Szponzor tárgyalás' },
                { src: '/images/team/gazdasag/2.jpg', alt: 'Költségtervezés' },
                { src: '/images/team/gazdasag/3.jpg', alt: 'Eseményszervezés' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* --- 3) Versenyeink --- */}
      <section id="versenyeink" className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-0">
        <h2 className="mb-4 text-center text-xl font-semibold lg:text-3xl">
          <span className="
            relative z-10 bg-gradient-to-r
            from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
            dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
            bg-clip-text text-transparent
          ">
            Versenyeink
          </span>
        </h2>

        <div className="
          rounded-3xl ring-1 ring-black/10 dark:ring-white/15
          p-4 sm:p-6 lg:p-8
          bg-gradient-to-r
          from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
          dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
          text-white
        ">
          <div className="mx-auto grid gap-4">
            <CompetitionItem kind="AI" name="Monaco Energy Boat Challenge" desc="Az év első versenye, ahol több mint, 50 csapat vesz részt 25 országból, összesen több mint 1000 hallgatóval, ami az eseményt az egyik legnagyobb nemzetközi napelemes hajóversennyé teszi." />
            <CompetitionItem kind="SOLAR" name="Balaton Solar Boat Challenge" desc="Hazánk egyetlen versenye, amelyet Balatonalmádiban rendeznek meg. A háromnapos eseményt az erős mezőny és a számunkra különösen kellemes helyszín hangulata jellemzi." />
            <CompetitionItem kind="SOLAR" name="Wildauer Solar Boot Regatta" desc="Ez a verseny a berlini régióban, Wildau városában kerül megrendezésre. A versenyszezon záróeseményeként kellemes, családias légkört teremt." />
          </div>
        </div>
      </section>


      {/* --- 4) Eredményeink  --- */}
      <section id="achievements" className="mx-auto w-full max-w-6xl">
        <h2 className="mb-4 text-center text-xl font-semibold lg:text-3xl">
          <span
            className="
              relative z-10 bg-gradient-to-r
              from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
              dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
              bg-clip-text text-transparent
            "
          >
            Az évek alatt elért eredményeink
          </span>
        </h2>

        <AchievementsContainer />
      </section>
    </PageLayout>
  );
}

/* ---------- Segéd “presentational” komponensek  ---------- */

function Figure({ src, alt }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width:768px) 50vw, 33vw" />
    </div>
  );
}

function CompetitionItem({ kind, name, desc }) {
  return (
    <div className="grid gap-1 rounded-2xl border p-4 shadow-sm md:grid-cols-[90px_1fr]">
      <div className="text-lg font-semibold uppercase tracking-wide">
        {kind}
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <p className="opacity-80">{desc}</p>
      </div>
    </div>
  );
}