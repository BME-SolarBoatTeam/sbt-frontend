import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../_components/(Layouts)/PageLayout';
import Container from '../_components/Container';

const page = () => {
  return (
    <PageLayout className={'grid items-center justify-center pt-(--navbar-height)'}>
      <div className="py-12 text-center text-3xl">
        Csekkold a{' '}
        <span className="bg-linear-to-r from-[#1BDC35] via-80% to-[#15EDD0] to-100% bg-clip-text font-semibold text-transparent">
          képeinket
        </span>
        .
        <div>
          <Container
            className={'mx-auto flex h-full w-[70vw] flex-col justify-between p-8 lg:w-[60vw] lg:flex-row lg:p-12'}
          >
            <div className="grid">
              <div className="grid-cols-2 grid-rows-1">
                <div className="grid grid-cols-2 grid-rows-1 items-center justify-start">
                  <img width={1000} src={'/images/logo/menologo.svg'}/>
                </div>
                <div className='grid grid-rows-1 '>
                  <div className="relative grid justify-center px-2 py-2">
                    <img width={110} src={'/Balaton.png'}/>
                    <p className="text-bme-white absolute left-15 h-28 w-full translate-y-1/2 -rotate-90">BALATON</p>
                  </div>
                  <div className="relative grid justify-end px-2 py-2">
                    <img width={235} src={'/Wildau.png'}/>
                    <p className="text-bme-white absolute bottom-0 w-full">WILDAU</p>
                  </div>
                </div>
                <div className="grid items-end justify-center">
                  <img width={2500} src={'/Monaco.png'}/>
                </div>
              </div>
            </div>
          </Container>
          <div></div>
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
