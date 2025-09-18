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

        it('should return the line for C if D is the widest point', () => {
            expect(diamond.line('C', 'D')).toEqual(' C   C');
        });

        it('should return the line for D if D is the widest point', () => {
            expect(diamond.line('D', 'D')).toEqual('D    D');
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

    });

    describe('Outer Space', () => {

        it('should return one space, if B is the current line and C is the widest point', () => {
            expect(diamond.outerSpace('B', 'C')).toEqual(' ');
        });

        it('should return two spaces, if C is the current line and E is the widest point', () => {
            expect(diamond.outerSpace('C', 'E')).toEqual('  ');
        });

        it('should throw an exception, if it is called with D and C', () => {
            expect(() => diamond.outerSpace('E', 'B')).toThrow('Invalid combination of arguments');
        });

    });

    describe('Alphabet Index', () => {

        it('should return 1, if A is provided', () => {
            expect(diamond.getAlphabetIndexOf('A')).toEqual(1);
        });

        it('should return 26, if Z is provided', () => {
            expect(diamond.getAlphabetIndexOf('Z')).toEqual(26);
        });

        it('should throw an exception, if 4 is provided', () => {
            expect(() => diamond.getAlphabetIndexOf('4')).toThrow('Invalid Argument');
        });

    });

});