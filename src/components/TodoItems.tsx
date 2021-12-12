import "./TodoList.css";
import { IonList, IonItem, IonButton } from "@ionic/react";
import { todoItem } from "../storageService";

interface TodoItemsProps {
  todos: todoItem[];
  deleteHandler: (key: string) => void;
}

const TodoItems = ({ todos, deleteHandler }: TodoItemsProps): JSX.Element => {
  return (
    <IonList className="toDoList">
      {todos.map((e) => (
        <IonItem key={e.key}>
          <p className="toDoItem">{e.value}</p>
          <IonButton
            className="deleteButton"
            color="danger"
            onClick={() => deleteHandler(e.key)}
          >
            Delete
          </IonButton>
        </IonItem>
      ))}
    </IonList>
  );
};

export default TodoItems;
