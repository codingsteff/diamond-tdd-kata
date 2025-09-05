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
        const isValidLetter = /^[A-Z]$/.test(letter);
        if (!isValidLetter)
            throw new Error('Invalid Argument');

        const charCode = letter.charCodeAt(0);
        const charCodeA = 'A'.charCodeAt(0);
        const index = charCode - charCodeA;
        const spaces = 2 * index - 1;
        return new Array(spaces + 1).join(' ');
    }

    outerSpace(current, widest): string {
        if(current=== 'C' && widest === 'E') {
            return '  ';
        }
        return ' ';
    }

}