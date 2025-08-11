import { v4 as uuidv4 } from 'uuid';

import { Dino, DinoType } from '@/state/types';
import { randomItem } from '@/util';

const DEFAULT_ATTRIBUTE_POINTS: number = 5;
const DEFAULT_HEALTH: number = 15;

export const generateName = (): string => {
    const firstParts = [
        'Fred',
        'Tina',
        'Gary',
        'Linda',
        'Carl',
        'Debra',
        'Steve',
        'Nancy',
        'Bob',
        'Karen',
        'Chompers',
        'Stompy',
        'Snaggletooth',
        'Tiny',
        'Clawdia',
        'Bitey',
        'Roarbert',
        'Tricera-Tom',
        'Veloci-Pete',
    ];

    const titles = [
        '',
        '',
        '', // empty for plain names sometimes
        'the Destroyer',
        'the Bonecrusher',
        'the Tiny Terror',
        'the Roaring Menace',
        'Lord of Fossils',
        'Queen of Claws',
        'Captain Crunch',
        'Baron von Chomp',
        'General Fang',
        'Professor Talonstein',
        'the Great Nom-Nom',
    ];

    return `${randomItem(firstParts)} ${randomItem(titles)}`.trim();
};

export const createDino = (defaultOverrides: Partial<Dino> = {}): Dino => ({
    id: uuidv4(),
    name: generateName(),
    level: 1,
    experience: 0,
    nextLevelExperience: 10,
    type: DinoType.Raptor,
    alive: true,
    attack: DEFAULT_ATTRIBUTE_POINTS,
    defense: DEFAULT_ATTRIBUTE_POINTS,
    speed: DEFAULT_ATTRIBUTE_POINTS,
    health: DEFAULT_HEALTH,
    maxHealth: DEFAULT_HEALTH,
    ...defaultOverrides,
});
