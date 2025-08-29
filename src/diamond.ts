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
        if (letter === 'C')
            return '   '
        return ' ';
    }

}