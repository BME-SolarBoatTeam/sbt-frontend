// app/sponsors/page.jsx
import Image from 'next/image';
import Link from 'next/link';

import PageLayout from '../_components/(Layouts)/PageLayout';
import SectionLayout from '../_components/(Layouts)/SectionLayout';
import SponsorCard from '../_components/(Sponsor)/SponsorCard';
import UploadSponsorForm from '../_components/(Forms)/UploadSponsorForm';

export const metadata = {
  title: 'Szponzorok',
  description: 'Jelenlegi szponzorok akik munkánkat segítik.',
};

const Page = () => {
  return (
    <PageLayout className="overflow-x-clip">
      {/* ========== GIGAWATT – ARANY ========== */}
      <SectionLayout className="relative grid items-start py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            style={{
              '--gold-light':
                'linear-gradient(135deg, #FFFBE6 0%, #FFE69A 40%, #F2D15B 80%)',
            }}
            className="
              rounded-3xl p-6 sm:p-8 lg:p-10
              ring-1 ring-black/10
              [background-image:var(--gold-light)] dark:[background-image:var(--gold-light)]
              text-bme-black
            "
          >
            <div className="flex flex-col items-center gap-8 lg:gap-10">
              <UploadSponsorForm />
              <h3 className="text-center text-2xl font-semibold lg:text-5xl">
                GIGAWATT Szponzorok
              </h3>

              <div className="grid gap-6 p-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                <SponsorCard
                  sponsorURL="https://mvm.hu/"
                  sponsorName="MVM"
                  sponsorImage="/images/sponsors/gigawatt/MVM.svg"
                  imageClassName="h-18"
                />
                <SponsorCard
                  sponsorURL="https://www.polinvent.com/"
                  sponsorName="Polinvent"
                  sponsorImage="/images/sponsors/gigawatt/Polinvent.svg"
                  imageClassName="h-18"
                />
                <SponsorCard
                  sponsorURL="https://www.hds.bme.hu/"
                  sponsorName="HRT"
                  sponsorImage="/images/sponsors/gigawatt/HRT.svg"
                  imageClassName="h-18"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* ========== MEGAWATT – EZÜST ========== */}
      <SectionLayout className="relative grid items-start py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            style={{
              '--silver-light':
                'linear-gradient(135deg, #F7F8FA 0%, #E9EDF1 50%, #DDE3E9 100%)',
            }}
            className="
              rounded-3xl p-6 sm:p-8 lg:p-10
              ring-1 ring-black/10
              [background-image:var(--silver-light)] dark:[background-image:var(--silver-light)]
              text-bme-black
            "
          >
            <div className="flex flex-col items-center gap-8 lg:gap-10">
              <h3 className="text-center text-2xl font-semibold lg:text-5xl">
                MEGAWATT Szponzorok
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-6 p-2 sm:gap-8">
                <SponsorCard sponsorURL="https://www.foxconn.hu/" imageClassName="h-10" sponsorName="Foxconn" sponsorImage="/images/sponsors/megawatt/Foxconn.svg" />
                <SponsorCard sponsorURL="https://boatshow.hu/" imageClassName="h-10" sponsorName="Boatshow" sponsorImage="/images/sponsors/megawatt/Boatshow.svg" />
                <SponsorCard sponsorURL="https://www.dasweltauto.hu/" imageClassName="h-10" sponsorName="Das WeltAuto" sponsorImage="/images/sponsors/megawatt/Das_WeltAuto.svg" />
                <SponsorCard sponsorURL="https://kontron.hu/" imageClassName="h-10" sponsorName="Kontron" sponsorImage="/images/sponsors/megawatt/s&t.svg" />
                <SponsorCard sponsorURL="https://easturn.hu/" imageClassName="h-10" sponsorName="Easturn" sponsorImage="/images/sponsors/megawatt/easturn.svg" />
                <SponsorCard sponsorURL="https://www.varinex.hu/" imageClassName="h-10" sponsorName="Varinex" sponsorImage="/images/sponsors/megawatt/Varinex.svg" />
                <SponsorCard sponsorURL="https://www.helukabel.hu/" imageClassName="h-10" sponsorName="Helukabel" sponsorImage="/images/sponsors/megawatt/Helukabel.svg" />
                <SponsorCard sponsorURL="https://www.festool.hu/" imageClassName="h-10" sponsorName="Festool" sponsorImage="/images/sponsors/megawatt/Festool.svg" />
                <SponsorCard sponsorURL="https://www.porschehungaria.hu/" imageClassName="h-10" sponsorName="Porsche Hungaria" sponsorImage="/images/sponsors/megawatt/Porsche.svg" />
                <SponsorCard sponsorURL="https://zoltek.com/" imageClassName="h-10" sponsorName="Zoltek" sponsorImage="/images/sponsors/megawatt/Zoltek.svg" />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* ========== KILOWATT – BRONZ ========== */}
      <SectionLayout className="relative grid items-start py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            style={{
              '--bronze-light':
                'linear-gradient(135deg, #F3E1D0 0%, #E3BFA0 45%, #C48A4A 90%)',
            }}
            className="
              rounded-3xl p-6 sm:p-8 lg:p-10
              ring-1 ring-black/10
              [background-image:var(--bronze-light)] dark:[background-image:var(--bronze-light)]
              text-bme-black
            "
          >
            <div className="flex flex-col items-center gap-8 lg:gap-10">
              <h3 className="text-center text-2xl font-semibold lg:text-5xl">
                KILOWATT Szponzorok
              </h3>

              <div className="flex flex-wrap items-center justify-center gap-6 p-2 sm:gap-8">
                <SponsorCard sponsorURL="https://www.wago.com/global/" imageClassName="h-10" sponsorName="Wago" sponsorImage="/images/sponsors/kilowatt/wago.svg" />
                <SponsorCard sponsorURL="https://autopro.hu/" imageClassName="h-10" sponsorName="Autopro" sponsorImage="/images/sponsors/kilowatt/autopro.svg" />
                <SponsorCard sponsorURL="https://www.mgm-controllers.com/" imageClassName="h-10" sponsorName="MGM Controllers" sponsorImage="/images/sponsors/kilowatt/mgm_controllers.svg" />
                <SponsorCard sponsorURL="https://fiber.hu/" imageClassName="h-10" sponsorName="Fiber" sponsorImage="/images/sponsors/kilowatt/fiber.svg" />
                <SponsorCard sponsorURL="" imageClassName="h-10" sponsorName="N/A" sponsorImage="/images/sponsors/placeholder.svg" />
                <SponsorCard sponsorURL="" imageClassName="h-10" sponsorName="N/A" sponsorImage="/images/sponsors/placeholder.svg" />
                <SponsorCard sponsorURL="" imageClassName="h-10" sponsorName="Gross" sponsorImage="/images/sponsors/kilowatt/gross.svg" />
                <SponsorCard sponsorURL="https://www.sensata.com/gigavac-redirect" imageClassName="h-10" sponsorName="Gigavac" sponsorImage="/images/sponsors/kilowatt/gigavac.svg" />
                <SponsorCard sponsorURL="https://grobelox.hu/" imageClassName="h-10" sponsorName="Grobelox" sponsorImage="/images/sponsors/kilowatt/grobelox.svg" />
                <SponsorCard sponsorURL="https://www.gurit.com/" imageClassName="h-10" sponsorName="Gurit" sponsorImage="/images/sponsors/kilowatt/gurit.svg" />
                <SponsorCard sponsorURL="https://www.harting.com/" imageClassName="h-10" sponsorName="Harting" sponsorImage="/images/sponsors/kilowatt/harting.svg" />
                <SponsorCard sponsorURL="https://www.henkel.hu/" imageClassName="h-10" sponsorName="Henkel" sponsorImage="/images/sponsors/kilowatt/henkel.svg" />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* ========== BME & Tudományos partner – brand gradiens konténer ========== */}
      <SectionLayout className="relative grid items-start py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="
              rounded-3xl p-6 sm:p-8 lg:p-10
              ring-1 ring-black/10 dark:ring-white/15
              bg-gradient-to-r
              from-[var(--color-bme-blue)] via-[var(--color-bme-purple)] to-[var(--color-bme-blue)]
              dark:from-[var(--color-bme-purple)] dark:via-[var(--color-bme-orange)] dark:to-[var(--color-bme-purple)]
              text-white
            "
          >
            <div className="flex flex-col items-center gap-10 lg:gap-12">
              <div>
                <h3 className="text-center text-2xl font-semibold lg:text-5xl">
                  Budapesti Műszaki és Gazdaságtudományi Egyetem
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-6 p-6 sm:gap-8">
                  <SponsorCard sponsorURL="https://manuf.bme.hu/" imageClassName="h-18 w-full" sponsorName="BME Gyártástudomány és -technológia Tanszék" sponsorImage="/images/sponsors/bme/gtt.svg" />
                  <SponsorCard sponsorURL="https://att.bme.hu/" imageClassName="h-18 w-full" sponsorName="Anyagtudomány és technológia Tanszék" sponsorImage="/images/sponsors/bme/att.svg" />
                  <SponsorCard sponsorURL="https://www.aut.bme.hu/" imageClassName="h-18 w-full" sponsorName="Automatizálási és Alkalmazott Informatikai Tanszék" sponsorImage="/images/sponsors/bme/aut.svg" />
                  <SponsorCard sponsorURL="http://ehk.bme.hu/" imageClassName="h-18 w-full" sponsorName="Egyetemi Hallgatói Képviselet" sponsorImage="/images/sponsors/bme/ehk.svg" />
                  <SponsorCard sponsorURL="https://gpk.bme.hu/hu/" imageClassName="h-18 w-full" sponsorName="Gépészmérnöki Kar" sponsorImage="/images/sponsors/bme/gpk.svg" />
                  <SponsorCard sponsorURL="https://gt3.bme.hu/" imageClassName="h-18 w-full" sponsorName="Gép- és Terméktervezés Tanszék" sponsorImage="/images/sponsors/bme/gt3.svg" />
                  <SponsorCard sponsorURL="http://ehk.bme.hu/" imageClassName="h-18 w-full" sponsorName="Egyetemi Hallgatói Képviselet" sponsorImage="/images/sponsors/bme/ehk2.svg" />
                </div>
              </div>

              {/* Tudományos partner */}
              <div className="flex flex-col items-center">
                <h3 className="text-center text-2xl font-semibold lg:text-5xl">
                  Tudományos partnerünk
                </h3>
                <div className="flex h-fit w-fit items-center justify-center p-6">
                  <SponsorCard
                    sponsorURL="https://www.ek.hun-ren.hu/"
                    imageClassName="h-24 w-48"
                    className="w-96"
                    sponsorName="HUN-REN Energiatudományi Kutatóközpont"
                    sponsorImage="/images/sponsors/science/hun-ren.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BME logó a dobozon kívül */}
          <div className="mt-16 flex items-center justify-center p-8 lg:p-0">
            <Link href="https://www.bme.hu/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/sponsors/bme_logo_light.svg"
                width={350}
                height={1}
                className="hidden lg:w-[500px] dark:block"
                alt="Budapesti Műszaki és Gazdaságtudományi Egyetem (BME)"
              />
              <Image
                src="/images/sponsors/bme_logo_dark.svg"
                width={350}
                height={1}
                className="block lg:w-[500px] dark:hidden"
                alt="Budapesti Műszaki és Gazdaságtudományi Egyetem (BME)"
              />
            </Link>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default Page;
