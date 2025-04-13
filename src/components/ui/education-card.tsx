import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from './card';
type Props = {
    picture: string;
    name: string;
    time: string;
    studied: string;
    description: string;
}

const EducationCard = ({ picture, name, time, studied, description }: Props) => {
  return (
    <Card>
        <CardHeader className='flex gap-5 items-center'>
            <div>
                <Image src={picture} alt={name} width={picture.includes('https://www.lfpsdelhi.com/images/logo.png') ? 50 : 30} height={30} />
            </div>
            <div>
                <p className='text-xl font-bold'>{name}</p>
                <p className='text-sm text-muted-foreground'>{studied}</p>
            </div>
            <div className='self-start mt-1'>
                <p className='text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md'>{time}</p>
            </div>
        </CardHeader>
        <CardContent>
            <p className='text-md text-muted-foreground'>{description}</p>
        </CardContent>
    </Card>
  )
}

export default EducationCard