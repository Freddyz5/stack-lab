'use client';
import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@heroui/react';

const CardDashboard = () => {
  return (
    <Card className="py-4 max-w-[300px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Rubén Tomalá</h4>
        <p className="text-tiny uppercase font-bold">Dev. Junior</p>
        <small className="text-default-500">
          Soy un desarrollador jr al que le gusta aprender nuevas tecnologías y probar cosas
          diferentes. Me motiva enfrentar retos y cada proyecto es una oportunidad para mejorar un
          poco más.{' '}
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://i.pinimg.com/1200x/ff/f8/40/fff8401fd5ee953c344d72e376bd2826.jpg"
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default CardDashboard;

