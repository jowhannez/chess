// Classes
import { Board    } from '../classes/board';
import { Renderer } from '../classes/renderer';

export default {
    board   : new Board(),
    renderer: null,
    init() {
        this.render();

        // Test some moves programatically
        this.test();
    },
    render() {
        this.renderer = new Renderer(this.board);
        this.renderer.render();
    },
    test() {
        const worldsFastestMate: Array<Array<string>> = [
            ['f2', 'f3'],
            ['e7', 'e5'],
            ['g2', 'g4'],
            ['d8', 'h4']
        ];

        let index: number = 1;
        for (const move of worldsFastestMate) {
            setTimeout(() => {
                this.board.movePiece(...move);
            }, index * 750);
            index++;
        }
    }
}