// Classes
import { Piece } from '../classes/piece';

export interface _PIECES {
    PAWN  : {type: string, key: string},
    ROOK  : {type: string, key: string},
    KNIGHT: {type: string, key: string},
    BISHOP: {type: string, key: string},
    QUEEN : {type: string, key: string},
    KING  : {type: string, key: string}
}

export interface _COLORS {
    WHITE: {
        name: string,
        code: string
    },
    BLACK: {
        name: string,
        code: string
    }
}

export interface _SPECIAL_NOTATION {
    TAKE        : string,
    CHECK       : string,
    CHECKMATE   : string,
    STALEMATE   : string,
    CASTLE_SHORT: string,
    CASTLE_LONG : string,
}

export interface _CONFIG {
    type : string,
    color: string,
    key ?: string,
    element?: HTMLElement
}

export interface _COORDINATES {
    x: number,
    y: number
}

export interface _RENDER_CONFIG {
    x   : number;
    y   : number;
    size: number;
    fill: string;
    piece?: Piece;
}

export interface _COLOR_OBJ {
    color: string
}