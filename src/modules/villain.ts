import { Character } from './interfaces';
import { Game } from './game';

export class Villain implements Character {
    name: string;
    games: Game[];
    weapon: string;
    special?: string;
    hp?: string;
}