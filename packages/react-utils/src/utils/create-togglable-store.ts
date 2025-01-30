import { create } from 'zustand'

export interface TogglableStore {
  open: () => void
  close: () => void
  isOpen: boolean
}

export const createTogglableStore = () => {
  return create<TogglableStore>((set) => ({
    close() {
      set({ isOpen: false })
    },
    open() {
      set({ isOpen: true })
    },
    isOpen: false,
  }))
}
