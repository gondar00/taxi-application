import React from 'react';
import {
	IonSegment,
	IonSegmentButton,
	IonToolbar,
} from '@ionic/react';
import { call, camera, bookmark, heart, pin } from 'ionicons/icons';
import './index.css'
interface ContainerProps {
}

const ExploreContainer: React.FC<ContainerProps> = ({ }) => {
	return (
		<IonToolbar>
			<IonSegment value="all" mode="ios">
				<IonSegmentButton layout="icon-start" value="all">
					Bike Taxi
				</IonSegmentButton>
				<IonSegmentButton layout="icon-start" value="favorites">
					Errands
				</IonSegmentButton>
			</IonSegment>
		</IonToolbar>
	);
};

export default ExploreContainer;
