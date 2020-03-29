import React, { useState } from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent,
    IonInput, IonItem, IonList, IonButtons, IonButton, IonLabel
} from '@ionic/react';
// import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

const Login: React.FC = () => {
    const [text, setText] = useState<string>();
    const [password, setPassword] = useState<string>();
    // const [number, setNumber] = useState<number>();
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <IonList>
          {/* <IonItem>
            <IonInput value={text} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem> */}
          <IonItem>
            <IonLabel>Username</IonLabel><br/>
            <IonInput type="text" value={text} placeholder="Enter username" onIonChange={e => setText(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel><br/>
            <IonInput type="password" value={password} placeholder="Enter password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
          </IonItem>
        </IonList>
        <IonButtons slot="primary">
            <IonButton color="secondary">
                Login
            </IonButton>
        </IonButtons>
      </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
