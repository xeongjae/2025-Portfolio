import { create } from "zustand";

interface ThemeState {
  isLightMode: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    isLightMode: false,
  toggleTheme: () => set((state) => ({ isLightMode: !state.isLightMode })), // 테마 전환 함수
}));

export default useThemeStore;
