/**
 * This is the main entry point for webpack.
 * This file as an "autoloader" for any files placed under the "components/" directory
 * so just create the directory, place any component file in it, and it should be auto bundled.
 * The component file "can" have a default export as an object with a method init() that will be called on page load
 */
import chess from './components/chess';

chess.init();