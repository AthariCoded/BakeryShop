import { makeAutoObservable } from "mobx";
import instance from "./instance";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (newUser) => {
    try {
      await instance.post("/signup", newUser);
    } catch (error) {
      console.error(error);
    }
  };
}

const userStore = new UserStore();

export default userStore;
