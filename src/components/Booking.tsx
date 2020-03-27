import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Input from '../ui/Input';
import './Booking.css'

const Booking: React.FC = ({ }) => {
  return (
    <div>
      <div className='from'>
        <Input />
      </div>
      <div className='to'>
        <Input />
      </div>
    </div>
  );
};

export default Booking;
