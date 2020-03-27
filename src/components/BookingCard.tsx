import React from 'react';
import { IonGrid, IonRow, IonCol, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import Input from '../ui/Input';
import './BookingCard.css'

const BookingCard: React.FC = ({ }) => {
  return (
    <div>
        <IonCard>
            <IonCardHeader>
            <IonGrid>
                <IonRow>
                    <IonCol>Total fare</IonCol>
                    <IonCol>Rs. 100</IonCol>
                </IonRow>
            </IonGrid>
            </IonCardHeader>
            <div className='spacer' />
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol><IonCardSubtitle>Promo code</IonCardSubtitle></IonCol>
                        <IonCol>Zap wallet</IonCol>
                    </IonRow>
                </IonGrid>
                <IonButton expand="full">Confirm</IonButton>
            </IonCardContent>
        </IonCard>
    </div>
  );
};

export default BookingCard;
