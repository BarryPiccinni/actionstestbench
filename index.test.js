const index = require('./index');

describe('Add function', () => {
    it('should add two numbers', () => {
        const actual = index(2, 3);

        const expected = 5;

        expect(actual).toEqual(expected);
    });

    /* it("should error if there's a problem", () => {
        const actual = index(2, 'foo');

        const expected = 'Error: You made an error';

        expect(actual).toEqual(expected);
    }); */
});
