import PageLayout from '../_components/(Layouts)/PageLayout';
import TeamPageContent from '../_components/(Team)/TeamPageContent';

export const metadata = {
  title: 'Csapatunk',
  description: 'Ismerd meg a csapatunkat.',
};

const Page = () => {
  return (
    <PageLayout className={'mx-auto grid w-full gap-16'}>
      <h1 className="pt-12 text-center text-xl lg:text-3xl">
        Ismerd meg
        <span className="bg-linear-to-r from-[var(--color-bme-orange)] to-[var(--color-bme-purple)] bg-clip-text font-semibold text-transparent">
          {' '}
          tagjainkat
        </span>
        !
      </h1>

      <TeamPageContent />
    </PageLayout>
  );
};

export default Page;
