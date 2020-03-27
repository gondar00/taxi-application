import React from 'react';
import './ExploreContainer.css';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonSegment,
  IonSegmentButton,
  IonToolbar,
} from '@ionic/react';
import { call, camera, bookmark, heart, pin } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonToolbar>
        <IonSegment value="all" mode="ios">
          <IonSegmentButton layout="icon-start" value="all">
            Bike Taxi
          </IonSegmentButton>
          <IonSegmentButton layout="icon-start" value="favorites">Errands</IonSegmentButton>
        </IonSegment>
      </IonToolbar>
    </div>
  );
};

export default ExploreContainer;
