import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../_components/(Layouts)/PageLayout';
import Container from '../_components/Container';

const page = () => {
    return (
        <PageLayout className={'grid items-center justify-center pt-(--navbar-height)'}>
            <div className='text-3xl text-center py-12'>Csekkold a {' '}
                <span className="bg-linear-to-r from-[#1BDC35] via-80% to-[#15EDD0] to-100% bg-clip-text font-semibold text-transparent">
                    képeinket
                </span>
                .
                <div>
                    <Container className={'mx-auto flex h-full w-[70vw] flex-col justify-between p-8 lg:w-[60vw] lg:flex-row lg:p-12'}>

                        <div className='grid'>
                            <div>
                                <img src={"/images/logo/menologo.svg"} height={325} width={325}></img>
                            </div>
                            <div className='grid'>
                                <img src={"/Balaton.png"}></img>
                            </div>
                            <div>
                                <img src={"/Wildau.png"}></img>
                            </div>
                            <div className='grid'>
                                <img src={"/Monaco.png"}></img>
                            </div>
                        </div>

                    </Container>
                    <div>

                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default page