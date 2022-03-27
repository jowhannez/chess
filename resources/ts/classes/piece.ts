// Util
import { PIECES } from '../utility/constants';
import { _CONFIG } from '../utility/interfaces';

export class Piece {
    type : string = '';
    color: string = '';
    key  : string = '';

    constructor(config: _CONFIG) {
        this.type  = config.type;
        this.color = config.color;
        this.key   = PIECES[config.type.toUpperCase()].key;
    }
}