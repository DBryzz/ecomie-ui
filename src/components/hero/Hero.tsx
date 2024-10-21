'use client';

import Image from 'next/image';
import HeroImage from '@/public/hero-image.svg';
import SearchInput from "@/src/components/SearchInput";

const Hero = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] h-full'>
            <div className='max-w-[997px] w-full h-auto lg:h-[654px] flex justify-between flex-col gap-10'>
                <div
                    className='flex flex-row items-start justify-start text-[40px] md:text-[60px] font-text-lg-semibold lg:flex-col'>
                    <b className='relative tracking-[-0.5px] leading-[50px] md:leading-[70px] h-full min-h-[125px]'>
                        <span className='text-mediumgreen-100'>
                          {/*{'L’ECOMIE : Une Vision, Une Mission ET Des Valeurs: '}*/}
                          {'Ecole pour la  Mission et l\'Evangelisation: '}
                          {/*{'Master Frontend & Backend Development: '}*/}
                        </span>
                        {/*Des vies transformées par l’évangile, engagées*/}
                        {/*dans la proclamation du message de vie dans les*/}
                        {/*campus, les lycées et les collèges*/}
                        {'Une Vision, Une Mission et Des Valeurs: '}

                        {/*Comprehensive Courses to Elevate Your Skills*/}
                    </b>
                </div>
                <div className='relative leading-[30px] max-w-[897px]'>
                  <span>
                    {
                        `Des vies transformées par l’évangile, engagées 
                    dans la proclamation du message de vie dans les
                    campus, les lycées et les collèges. `
                        // "Explore backend development across diverse frameworks: Express, Spring Boot, and Fast Api. Experience firsthand how each stack shapes the application's  architecture and performance. Join us and boraden your development horizons."
                    }
                    <i>
                    {
                        `<<<Tous les hommes ont droit à mon message ; je me sens en dette envers tous
                        les peuples, civilisés ou non, instruits ou ignorants. `
                        // "Explore backend development across diverse frameworks: Express, Spring Boot, and Fast Api. Experience firsthand how each stack shapes the application's  architecture and performance. Join us and boraden your development horizons."
                    }
                        <b> Romains 1.141</b> {">>>"}
                  </i>
                  </span>

                </div>
                <SearchInput
                    handleSearch={() => {
                    }}
                    onInputChanged={() => {
                    }}
                    inputClassName='rounded-[50px] h-[60px] md:h-[99px]'
                    buttonClassName='md:h-[76px] md:min-w-[174px]'
                />
            </div>
            <Image
                src={HeroImage}
                height={812}
                width={609}
                alt='Hero image'
                className='hidden md:flex'
            />
        </div>
    );
};

export default Hero;