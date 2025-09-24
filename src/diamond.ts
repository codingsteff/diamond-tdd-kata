export class Diamond {

    private _letter: string;
    private _charCodeA: number;

    constructor(letter: string) {
        this._letter = letter;
        this._charCodeA = 'A'.charCodeAt(0);
    }

    toString(): string {
        if (this._letter === 'A') {
            return this._letter;
        }

        const upperDiamond = this.upperHalf(this._letter);
        const lowerDiamond = this.lowerHalf(this._letter);

        return upperDiamond + '\n' + lowerDiamond;
    }

    upperHalf(widest: string): string {
        return this.half(widest).join('\n');
    }

    lowerHalf(widest: string): string {
        const half = this.half(widest);
        // Reverse array, but ignore widest line
        return half.reverse().slice(1).join('\n');
    }

    private half(widest: string): string[] {
        const lines = [];
        const widestIndex = this.getAlphabetIndexOf(widest);
        for (let i = 0; i < widestIndex; i++) {
            const currentLetter = String.fromCharCode(this._charCodeA + i);
            lines.push(this.line(currentLetter, widest));
        }
        return lines;
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

        const charCode = letter.charCodeAt(0);
        return charCode - this._charCodeA + 1;
    }

}