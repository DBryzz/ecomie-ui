'use client';

import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import Rating from '@/src/components/courses/Rating';
import React, { useEffect, useState } from 'react';
import BriefProfile from "@/src/components/user/BriefProfile";

const TestimonialCard = () => {
    const [hasmounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasmounted) {
        return null;
    }

    return (
        <Card className='w-[1045px] gap-8 bg-deep-forest-green-200 h-auto md:h-[420px] p-10'>
            <CardHeader>
                <div className='flex justify-between'>
                    <BriefProfile name={`Ebou Jobe`} role={'Developer'} avatarSource={'https://github.com/shadcn.png'} avatarAlt={'@shadcn'} avatarFallBack={'OM'} />

                    <Rating rating={5} isReadOnly />
                </div>
            </CardHeader>
            <hr className='bg-white h-0.5' />
            <CardContent className='pt-10 text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;