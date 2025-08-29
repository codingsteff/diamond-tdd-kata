export class Diamond {

    private _letter: string;

    constructor(letter: string) {
        this._letter = letter;
    }

    toString(): string {
        return this._letter;
    }

    line(letter): string {
        return letter;
    }

    innerSpace(letter): string {
        const charCode = letter.charCodeAt(0);
        const charCodeA = 'A'.charCodeAt(0);
        const index = charCode - charCodeA;
        const spaces = 2 * index - 1;
        return new Array(spaces + 1).join(' ');
    }

}