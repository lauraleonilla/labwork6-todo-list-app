import { Storage } from "@ionic/storage";

export let storage: Storage;

export const createStore = (name = "toDoStorage") => {
  storage = new Storage({
    name,
  });
  storage.create();
};

export const set = async (key: string, val: string) => {
  await storage.set(key, val);
};

export const get = async (key: string) => {
  const val = await storage.get(key);
  return val;
};

export const remove = async (key: string) => {
  await storage.remove(key);
};

export const clear = async () => {
  await storage.clear();
};

export interface todoItem {
  value: string;
  key: string;
}

export const getAllItems = () => {
  const list: todoItem[] = [];
  return new Promise((resolve, reject) => {
    storage
      .forEach((value, key, index) => {
        list.push({ value, key });
      })
      .then((d) => {
        resolve(list);
      });
  });
};

export const getStorageLength = async () => {
  const length = await storage.length();
  return length;
};
