import { create } from "zustand";

interface ThemeState {
  colorMode: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  colorMode: false,
  toggleTheme: () => set((state) => ({ colorMode: !state.colorMode })), // 테마 전환 함수
}));

export default useThemeStore;
