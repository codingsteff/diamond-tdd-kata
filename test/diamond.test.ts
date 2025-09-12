import { describe, it, expect, beforeEach } from 'vitest';
import { Diamond } from '../src/diamond';

describe('Print Diamond', () => {

    let diamond: any;

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

        it('should return an empty string, if A is provided', () => {
            expect(diamond.innerSpace('A')).toEqual('');
        });

        it('should return one space, if B is provided', () => {
            expect(diamond.innerSpace('B')).toEqual(' ');
        });

        it('should return three spaces, if C is provided', () => {
            expect(diamond.innerSpace('C')).toEqual('   ');
        });

        it('should throw an exception, if 4 is provided', () => {
            expect(() => diamond.innerSpace('4')).toThrow('Invalid Argument');
        });

    });

    describe('Outer Space', () => {

        it('should return one space, if B is the current line and C is the widest point', () => {
            expect(diamond.outerSpace('B', 'C')).toEqual(' ');
        });

        it('should return two spaces, if C is the current line and E is the widest point', () => {
            expect(diamond.outerSpace('C', 'E')).toEqual('  ');
        });

    });

    describe('Get Alphabet Index', () => {

        it('should return 1, if A is provided', () => {
            expect(diamond.getAlphabetIndex('A')).toEqual(1);
        });

         it('should return 26, if Z is provided', () => {
            expect(diamond.getAlphabetIndex('Z')).toEqual(26);
        });

    });

});