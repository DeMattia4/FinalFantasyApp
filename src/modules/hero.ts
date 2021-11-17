import { Character } from './interfaces';
import { Game } from './game';

export class Hero implements Character {
    name: string;
    games: Game[];
    weapon: string;
    special?: string;
}