import { Dino, DinoType } from '@/state/types';

const DEFAULT_ATTRIBUTE_POINTS: number = 5;
const DEFAULT_HEALTH: number = 15;

export const generateName = (): string => '';

export const createDino = (defaultOverrides: Partial<Dino> = {}): Dino => ({
    name: generateName(),
    type: DinoType.Raptor,
    alive: true,
    attack: DEFAULT_ATTRIBUTE_POINTS,
    defense: DEFAULT_ATTRIBUTE_POINTS,
    speed: DEFAULT_ATTRIBUTE_POINTS,
    health: DEFAULT_HEALTH,
    maxHealth: DEFAULT_HEALTH,
    ...defaultOverrides,
});
