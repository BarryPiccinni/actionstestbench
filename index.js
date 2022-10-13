function add(a, b) {
    try {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        throw new Error('You made an error');
    } catch (err) {
        return err.toString();
    }
}
module.exports = add;
