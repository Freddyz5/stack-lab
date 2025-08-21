// import Cookies from "js-cookie";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserInfo } from "../types/Users";

type State = {
  userInfo: UserInfo;
};

type Actions = {
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
  // clearTokens: () => void;
};

export const useUserStore = create(
  persist<State & Actions>(
    (set) => ({
      userInfo: {
        id: "",
        name: "",
        lastName: "",
        email: "",
        avatar: "",
      },

      setUserInfo: (userInfo: UserInfo) => {
        set(() => ({
          userInfo: userInfo,
        }));
      },

      clearUserInfo: () => {
        set(() => ({
          userInfo: {
            id: "",
            name: "",
            lastName: "",
            email: "",
            avatar: "",
          },
        }));
      },

    }),
    {
      name: "auth",
      // // storage: createJSONStorage(() => customSessionStorage),
      // hacer que en el sessionStorage se guarde solamente la info del usuario
    }
  )
);
