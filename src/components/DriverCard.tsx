import React from 'react';
import { IonGrid, IonRow, IonCol, IonAvatar, IonChip, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import Input from '../ui/Input';
import './DriverCard.css'

const DriverCard: React.FC = ({ }) => {
    return (
        <div>
            <IonCard>
                <IonCardHeader>
                    <IonGrid>
                        <IonRow>
                            <IonCol>    <IonChip>
      <IonAvatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>
      <IonLabel>Chip Avatar</IonLabel>
    </IonChip></IonCol>
                            <IonCol>
                                <IonLabel>OTP:1234</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardHeader>
                <div className='spacer' />
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol><IonCardSubtitle>Payment[CASH]</IonCardSubtitle></IonCol>
                            <IonCol>Fare: 1000</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
                <div className='spacer' />
                <IonCardContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol>SOS</IonCol>
                            <IonCol>Details</IonCol>
                            <IonCol>Cancel</IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default DriverCard;
