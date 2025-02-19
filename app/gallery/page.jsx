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
              <div className="flex">
                <div className="grid justify-start items-center">
                  <img className='w-7xl' src={'/images/logo/menologo.svg'}  ></img>
                </div>
                <div className="grid justify-center px-2 py-2">
                  <img className='' src={'/Balaton.png'}></img>
                </div>
                <div className="grid px-2 py-2 justify-end">
                  <img src={'/Wildau.png'}></img>
                </div>
                <div className="grid items-end">
                  <img src={'/Monaco.png'}></img>
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
