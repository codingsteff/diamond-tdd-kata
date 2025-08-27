import { describe, it, expect } from 'vitest';
import { Diamond } from '../src/diamond';

describe('Print Diamond', () => {

    it('should return A, if A is provided', () => {
        var diamond = new Diamond('A');
        expect(diamond.toString()).toEqual('A');
    });

    describe('Line', () => {

        it('should return the line for letter A', () => {
            var diamond = new Diamond('A');
            expect(diamond.line('A')).toEqual('A');
        });

    });

});