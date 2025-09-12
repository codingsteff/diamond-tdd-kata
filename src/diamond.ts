export class Diamond {

    private _letter: string;

    constructor(letter: string) {
        this._letter = letter;
    }

    toString(): string {
        return this._letter;
    }

    line(letter: string): string {
        return letter;
    }

    innerSpace(letter: string): string {
        const isValidLetter = /^[A-Z]$/.test(letter);
        if (!isValidLetter)
            throw new Error('Invalid Argument');

        const charCode = letter.charCodeAt(0);
        const charCodeA = 'A'.charCodeAt(0);
        const index = charCode - charCodeA;
        const spaces = 2 * index - 1;
        return new Array(spaces + 1).join(' ');
    }

    outerSpace(current: string, widest: string): string {
        const currentIndex = current.charCodeAt(0);
        const widestIndex = widest.charCodeAt(0);

        const spaces = widestIndex - currentIndex;
        return new Array(spaces + 1).join(' ');
    }

    getAlphabetIndexOf(letter: string): number {
        const isValidLetter = /^[A-Z]$/.test(letter);
        if (!isValidLetter)
            throw new Error('Invalid Argument');

        const charCodeA = 'A'.charCodeAt(0);
        const charCode = letter.charCodeAt(0);
        return charCode - charCodeA + 1;
    }

}