import React from "react";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonContent,
  IonTextarea,
} from "@ionic/react";

const CommentModal = ({ isOpen, title, sendAction, closeAction, comment }) => {
  const [commentText, setCommentText] = React.useState(
    comment ? comment.text : ""
  );

  function handleSendAction(item) {
    sendAction(item);
    setCommentText("");
  }

  return (
    <IonModal isOpen={isOpen} onDidDismiss={closeAction}>
      <IonHeader translucent>
        <IonToolbar color="primary">
          <IonTitle>{title}</IonTitle>
          <IonButton slot="start">
            <IonButton onClick={closeAction}>Close</IonButton>
          </IonButton>
          <IonButton slot="end">
            <IonButton onClick={() => handleSendAction(commentText)}>
              Send
            </IonButton>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTextarea
          row={25}
          col={25}
          placeholder="Your Comment"
          value={commentText}
          onIonChange={(e) => setCommentText(e.target.value)}
        />
      </IonContent>
    </IonModal>
  );
};

export default CommentModal;
