// Classes
import { Piece } from './piece';

// Util
import { DEFAULT_STATE } from '../utility/constants';
import { _COORDINATES } from '../utility/interfaces';

export class Board {
    state: Array<Array<Piece|null>> = DEFAULT_STATE;
    move : number = 1;

    setState(state: Array<Array<Piece|null>>) {
        if (state.length !== 8 || state.some(row => row.length !== 8)) {
            throw new Error('Invalid state');
        }

        this.state = state;
    }

    addPiece(piece: Piece, pos: string) {
        if (!this._legalPosition(pos)) {
            throw new Error(`'${pos}' Is an illegal position`);
        }

        const coords: _COORDINATES = this._getCoordinates(pos);

        this.state[coords.y][coords.x] = piece;
    }

    removePiece(pos: string) {
        if (!this._legalPosition(pos)) {
            throw new Error(`'${pos}' Is an illegal position`);
        }

        const coords: _COORDINATES = this._getCoordinates(pos);

        this.state[coords.y][coords.x] = null;
    }

    getPiece(pos: string) {
        const coords: _COORDINATES = this._getCoordinates(pos);

        return this.state[coords.y][coords.x];
    }

    movePiece(from: string, to: string) {
        if (!this._legalPosition(from)) {
            throw new Error(`'${from}' Is an illegal position`);
        }
        if (!this._legalPosition(to)) {
            throw new Error(`'${to}' Is an illegal position`);
        }

        const piece: Piece = this.getPiece(from);
        if (!piece) {
            throw new Error(`There is no piece at '${from}'`);
        }
        if (!this._canMove(piece, to)) {
            throw new Error(`Can't move ${piece.type} to ${to}`);
        }

        this.removePiece(from);
        this.addPiece(piece, to);
        console.log(`${Math.floor(this.move)}: ${piece.key}${to}`);
        this.move += 0.5;
    }

    _legalPosition(pos: string) {
        return /^[a-h][1-8]$/.test(pos);
    }

    _canMove(piece: Piece, pos: string) {
        // todo: check if move is possible

        return true;
    }

    _getCoordinates(pos: string) {
        const coords: Array<string> = pos.split('');

        return {
            x: coords[0].charCodeAt(0) - 97,
            y: 7 - (parseInt(coords[1]) - 1),
        };
    }
}