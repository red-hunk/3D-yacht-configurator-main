import create from 'zustand'

interface DarkModeState {
  darkMode: boolean
}

interface DarkModeActions {
  setDarkMode: (value: boolean) => void
}

const useDarkModeStore = create<DarkModeState & DarkModeActions>((set) => ({
  darkMode: true,
  setDarkMode: (value) => set(() => ({ darkMode: value }))
}))

export default useDarkModeStore
