import { describe, it, expect, beforeEach } from 'vitest';
import { Diamond } from '../src/diamond';

describe('Print Diamond', () => {

    var diamond;

    beforeEach(() => {
        diamond = new Diamond('A');
    })

    it('should return A, if A is provided', () => {
        expect(diamond.toString()).toEqual('A');
    });

    describe('Line', () => {

        it('should return the line for letter A', () => {
            expect(diamond.line('A')).toEqual('A');
        });

    });

    describe('Inner Space', () => {

        it('should return one space, if B is provided', () => {
            expect(diamond.innerSpace('B')).toEqual(' ');
        });

        it('should return three spaces, if C is provided', () => {
            expect(diamond.innerSpace('C')).toEqual('   ');
        });

    });

});