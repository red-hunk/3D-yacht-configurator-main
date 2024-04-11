import create from "zustand"


interface CarSpeed {
  speed: number;
  increment: () => void;
  decrement: () => void;
}

export const useCarSpeed = create<CarSpeed>((set) => ({
  speed: 0,
  increment: () => set((state) => ({ speed: state.speed + 0.05 })),
  decrement: () => set((state) => ({ speed: state.speed - 0.05 })),
}));

interface Angle {
  angle: number;
  increment: () => void;
  decrement: () => void;
}

export const useAngle = create<Angle>((set) => ({
  angle: 0,
  increment: () => set((state) => ({ angle: state.angle + Math.PI / 1800 })),
  decrement: () => set((state) => ({ angle: state.angle - Math.PI / 1800 })),
}));

interface Direction {
  forward: boolean,
  backward: boolean,
  left: boolean,
  right: boolean
  setDirection: (value: boolean, name: string) => void;
}

export const useDirection = create<Direction>((set) => ({
  forward: false,
  backward: false,
  left: false,
  right: false,
  setDirection: (value, name) => set((state) => ({ ...state, [name]: value }))
}));