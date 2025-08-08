export enum DinoType {
    Raptor,
    Tyrannosaurus,
}

export type Dino = {
    type: DinoType;
    alive: boolean;
    name: string;
    health: number;
    maxHealth: number;
    attack: number;
    defense: number;
    speed: number;
};
