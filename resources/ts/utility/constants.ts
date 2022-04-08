// Classes
import { Piece } from '../classes/piece';

// Util
import { _PIECES, _COLORS, _SPECIAL_NOTATION, _COLOR_OBJ } from '../utility/interfaces';

export const SIZE: number = 80;

export const PIECES: _PIECES = {
    PAWN  : {type: 'pawn',   key: ''},
    ROOK  : {type: 'rook',   key: 'R'},
    KNIGHT: {type: 'knight', key: 'N'},
    BISHOP: {type: 'bishop', key: 'B'},
    QUEEN : {type: 'queen',  key: 'Q'},
    KING  : {type: 'king',   key: 'K'}
};

export const COLORS: _COLORS = {
    WHITE: {
        name: 'white',
        code: '#f0d9b5'
    },
    BLACK: {
        name: 'black',
        code: '#b58863'
    }
}

export const SPECIAL_NOTATION: _SPECIAL_NOTATION = {
    TAKE        : 'x',
    CHECK       : '+',
    CHECKMATE   : '#',
    STALEMATE   : '=',
    CASTLE_SHORT: '0-0',
    CASTLE_LONG : '0-0-0',
};

export const EMPTY_STATE: Array<Array<null>> = [
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null)
];

const BLACK: _COLOR_OBJ = {color: COLORS.BLACK.name};
const WHITE: _COLOR_OBJ = {color: COLORS.WHITE.name};

export const DEFAULT_STATE: Array<Array<Piece|null>> = [
    [
        new Piece({ ...BLACK, ...PIECES.ROOK   }), 
        new Piece({ ...BLACK, ...PIECES.KNIGHT }), 
        new Piece({ ...BLACK, ...PIECES.BISHOP }), 
        new Piece({ ...BLACK, ...PIECES.QUEEN  }), 
        new Piece({ ...BLACK, ...PIECES.KING   }), 
        new Piece({ ...BLACK, ...PIECES.BISHOP }), 
        new Piece({ ...BLACK, ...PIECES.KNIGHT }), 
        new Piece({ ...BLACK, ...PIECES.ROOK   })
    ],
    [
        new Piece({ ...BLACK, ...PIECES.PAWN }), 
        new Piece({ ...BLACK, ...PIECES.PAWN }), 
        new Piece({ ...BLACK, ...PIECES.PAWN }), 
        new Piece({ ...BLACK, ...PIECES.PAWN }), 
        new Piece({ ...BLACK, ...PIECES.PAWN }), 
        new Piece({ ...BLACK, ...PIECES.PAWN }), 
        new Piece({ ...BLACK, ...PIECES.PAWN }), 
        new Piece({ ...BLACK, ...PIECES.PAWN }),
    ],
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    [
        new Piece({ ...WHITE, ...PIECES.PAWN }), 
        new Piece({ ...WHITE, ...PIECES.PAWN }), 
        new Piece({ ...WHITE, ...PIECES.PAWN }), 
        new Piece({ ...WHITE, ...PIECES.PAWN }), 
        new Piece({ ...WHITE, ...PIECES.PAWN }), 
        new Piece({ ...WHITE, ...PIECES.PAWN }), 
        new Piece({ ...WHITE, ...PIECES.PAWN }), 
        new Piece({ ...WHITE, ...PIECES.PAWN })
    ],
    [
        new Piece({ ...WHITE, ...PIECES.ROOK   }), 
        new Piece({ ...WHITE, ...PIECES.KNIGHT }), 
        new Piece({ ...WHITE, ...PIECES.BISHOP }), 
        new Piece({ ...WHITE, ...PIECES.QUEEN  }), 
        new Piece({ ...WHITE, ...PIECES.KING   }), 
        new Piece({ ...WHITE, ...PIECES.BISHOP }), 
        new Piece({ ...WHITE, ...PIECES.KNIGHT }), 
        new Piece({ ...WHITE, ...PIECES.ROOK   })
    ],
]