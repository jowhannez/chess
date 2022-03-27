// Util
import { PIECES } from '../utility/constants';
import { _CONFIG } from '../utility/interfaces';

export class Piece {
    type    : string = '';
    color   : string = '';
    key     : string = '';
    element?: HTMLElement = null;

    constructor(config: _CONFIG) {
        this.type  = config.type;
        this.color = config.color;
        this.key   = PIECES[config.type.toUpperCase()].key;
        
        if (config.key) {
            this.key = config.key;
        }
        if (config.element) {
            this.element = config.element;
        }
    }
}