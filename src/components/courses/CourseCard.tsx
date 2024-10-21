import { Card, CardContent, CardFooter } from '@/src/components/ui/card';
import CourseImage from '@public/course-image.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { Button } from '@/src/components/ui/button';

import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Play } from 'lucide-react';
import Rating from '@/src/components/courses/Rating';
import BriefProfile from "@/src/components/user/BriefProfile";

const CourseCard = () => {
    return (
        <Card className='bg-deep-forest-green-200  text-white w-full max-w-[520px] shadow-lg transform translate-transform hover:scale-105'>
            <Image width={520} height={268} src={CourseImage} alt='Course Image' className="bg-blend-overlay bg-blend-color"/>
            <CardContent className='flex flex-col gap-10 pt-8'>
                <div className='flex justify-between'>
                    <div className='flex gap-2 h-8 items-center justify-center '>
                        <div className='w-8 h-full rounded-full grid place-items-center bg-mediumgreen-100'>
                            <Play />
                        </div>
                        <span>{`10x Lessons`}</span>
                    </div>
                    <Badge variant={'default'} className={'dark'}>Design</Badge>
                </div>
                <b className='text-11xl leading-[30px] inline-block'>
                    Express Backend Full Course
                </b>
                <div className='h-[98px]'>
                    <hr className='bg-white h-0.5' />
                    <div className='flex justify-between items-center h-full'>
                        <BriefProfile name={`Ebou Jobe`} role={'Developer'} avatarSource={'https://github.com/shadcn.png'} avatarAlt={'@shadcn'} avatarFallBack={'OM'} />
                        {/*<div className='flex items-center space-x-4'>*/}
                        {/*    <Avatar>*/}
                        {/*        <AvatarImage*/}
                        {/*            src='https://github.com/shadcn.png'*/}
                        {/*            alt='@shadcn'*/}

                        {/*        />*/}
                        {/*        <AvatarFallback className={'dark bg-white text-black'}>OM</AvatarFallback>*/}
                        {/*    </Avatar>*/}
                        {/*    <div>*/}
                        {/*        <p className='text-lg font-medium leading-none'>Ebou Jobe</p>*/}
                        {/*        <p className='text-sm text-muted-foreground'>Developer</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='flex flex-col items-center'>
                            <p>100+</p>
                            <p>Students</p>
                        </div>
                    </div>
                    <hr className='bg-white h-0.5' />
                </div>
            </CardContent>
            <CardFooter className='flex justify-between'>
                <Rating rating={4.6} isReadOnly />
                <Button variant={'courseAppBtn'}>Enroll Now</Button>
            </CardFooter>
        </Card>
    );
};

export default CourseCard;