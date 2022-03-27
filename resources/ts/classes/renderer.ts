// Classes
import { Piece } from './piece';
import { Board } from './board';

// Util
import { COLORS } from '../utility/constants';
import { _RENDER_CONFIG, _CONFIG, _COORDINATES } from '../utility/interfaces';

export class Renderer {
    board   : Board = null;
    state   : Array<Array<Piece|null>> = null;
    canvas  : HTMLCanvasElement = document.querySelector('canvas');
    ctx     : CanvasRenderingContext2D = this.canvas.getContext('2d');
    size    : number = 0;
    selected: string = '';

    constructor(board: Board) {
        this.board = board;
        this.size  = this.canvas.width / board.state.length;

        this.init();
    }

    init() {
        this.drawBackground();
        this.listeners();
    }

    render() {
        for (let i = 0; i < this.board.state.length; i++) {
            for (let j = 0; j < this.board.state.length; j++) {
                const x     : number = i * this.size;
                const y     : number = j * this.size;
                const fill  : string = (i + j) % 2 === 0 ? COLORS.WHITE.code : 
                                                           COLORS.BLACK.code;
                const config: _RENDER_CONFIG = { x, y, fill, size: this.size };
                const piece : Piece = this.board.state[j][i];

                if (this.board.state[j][i]) {
                    this.drawPiece({...config, ...{piece}});
                } else {
                    this.drawSquare(config);
                }
            }
        }
    }

    listeners() {
        this.canvas.addEventListener('click', event => {
            const x: number = event.offsetX;
            const y: number = event.offsetY;
            const square: string = this.getSquare(x, y);
            const coords: Array<number> = this.getSquareCoordinates(x, y);
            
            if (!this.selected) {
                this.selected = square;
                this.highlight(coords[0], coords[1]);
            } else {
                const piece: Piece|null = this.board.getPiece(this.selected);
                if (piece) {
                    this.board.movePiece(this.selected, square);
                }
                this.selected = '';
                this.render();
            }
        });
    }

    drawBackground() {
        const img: HTMLImageElement = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
        }

        img.src = `./resources/assets/board.png`;
    }

    drawSquare(config: _RENDER_CONFIG) {
        this.ctx.fillStyle = config.fill;
        this.ctx.fillRect(config.x, config.y, config.size, config.size);
    }

    drawPiece(config: _RENDER_CONFIG) {
        const img: HTMLImageElement = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, config.x, config.y, config.size, config.size);
        }

        img.src = `./resources/assets/${config.piece.color}_${config.piece.type}.svg`;
    }

    getSquare(x: number, y: number) {
        const square: string = [
            String.fromCharCode(97 + Math.floor(x / this.size)),
            7 - (Math.floor(y / this.size) - 1)
        ].join('');

        return square;
    }

    getSquareCoordinates(x: number, y: number) {
        return [
            Math.floor(x / this.size) * this.size,
            Math.floor(y / this.size) * this.size
        ];
    }

    highlight(x: number, y: number) {
        this.drawSquare({x, y, fill: '#00ff0020', size: this.size })
    }
}