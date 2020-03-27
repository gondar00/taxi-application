import React, { useState } from 'react';
import {
	IonSegment,
	IonSegmentButton,
	IonInput,
} from '@ionic/react';
import { call, camera, bookmark, heart, pin } from 'ionicons/icons';

interface ContainerProps {
}

const ExploreContainer: React.FC<ContainerProps> = ({  }) => {
  const [text, setText] = useState<string>();

	return (
    <IonInput value={text} placeholder="Placeholder.." onIonChange={e => setText(e.detail.value!)}></IonInput>
	);
};

export default ExploreContainer;
