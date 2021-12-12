import React, { useState, useEffect, useCallback } from "react";
import { getAllItems, todoItem, remove } from "../storageService";
import { set, getStorageLength } from "../storageService";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import InputComponent from "../components/InputComponent";
import TodoItems from "../components/TodoItems";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [todos, setTodos] = useState<todoItem[]>([]);
  const [text, setText] = useState<string>("");

  const getToDos = useCallback(async () => {
    const items = await getAllItems();
    if (Array.isArray(items)) {
      setTodos(items);
    }
  }, []);

  useEffect(() => {
    getToDos();
  }, [getToDos]);

  const deleteHandler = async (key: string) => {
    await remove(key);
    getToDos();
  };

  const saveHandler = async (text: string) => {
    if (!text) {
      return;
    }
    const currentLength = await getStorageLength();
    const newIndex = currentLength + 1;
    await set(newIndex.toString() + text, text);
    setText("");
    getToDos();
  };

  return (
    <IonPage>
      <IonHeader className="mainPage">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <InputComponent
          text={text}
          saveHandler={saveHandler}
          setText={setText}
        />
        <TodoItems deleteHandler={deleteHandler} todos={todos} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
