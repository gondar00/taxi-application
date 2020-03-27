import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import TaskSelector from '../ui/TaskSelector';
import Booking from '../components/Booking';
import DriverCard from '../components/DriverCard';
import BookingCard from '../components/BookingCard';
import Search from '../components/Search';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC<RouteComponentProps<{ name: string; }>> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <TaskSelector />
          {/* <IonTitle>{match.params.name}</IonTitle> */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <DriverCard />
        {/* <ExploreContainer name={match.params.name} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Page;
