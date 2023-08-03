import { Brick } from "~/sprites/Brick";
import { Paddle } from "~/sprites/Paddle";
import { Ball } from "~/sprites/Ball";

export class CanvasView {
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;
}