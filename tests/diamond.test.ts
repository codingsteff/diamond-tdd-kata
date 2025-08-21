import { describe, it, expect } from 'vitest';
import { Diamond } from '../src/diamond';

describe('Diamond', () => {

    it('create diamond', () => {
        var diamond = new Diamond();
        expect(diamond).toBeInstanceOf(Diamond);
    });

});