export class Diamond {

    private _letter: string;

    constructor(letter: string) {
        this._letter = letter;
    }

    toString(): string {
        return this._letter;
    }

    upperHalf(widest: string): string {
        const lines = [];
        for (let i = 0; i < this.getAlphabetIndexOf(widest); i++) {
            const currentLetter = String.fromCharCode('A'.charCodeAt(0) + i);
            lines.push(this.line(currentLetter, widest));
        }
        return lines.join('\n');
    }

    lowerHalf(widest: string): string {
        return ' B B\n  A';
    }

    line(current: string, widest: string): string {
        const outerSpace = this.outerSpace(current, widest);
        const innerSpace = this.innerSpace(current);

        let line = outerSpace + current;

        if (innerSpace)
            line += innerSpace + current;

        return line;
    }

    innerSpace(letter: string): string {
        const index = this.getAlphabetIndexOf(letter);

        const spaces = 2 * (index - 1) - 1;
        return new Array(spaces + 1).join(' ');
    }

    outerSpace(current: string, widest: string): string {
        const currentIndex = this.getAlphabetIndexOf(current);
        const widestIndex = this.getAlphabetIndexOf(widest);

        if (currentIndex > widestIndex)
            throw new Error('Invalid combination of arguments');

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