export enum DinoType {
    Raptor,
    Tyrannosaurus,
}

export type Dino = {
    id: string;
    type: DinoType;
    alive: boolean;
    level: number;
    experience: number;
    nextLevelExperience: number;
    name: string;
    health: number;
    maxHealth: number;
    attack: number;
    defense: number;
    speed: number;
};
