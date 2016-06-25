class Utility {
    constructor() {}

    shuffle(pool) {
        const LEN = pool.length - 1;
        for (let j, x, i = LEN; i > 0; --i) {
            j = parseInt(Math.random() * (i + 1));
            x = pool[i];
            pool[i] = pool[j];
            pool[j] = x;
        }
        return pool;
    }

    generate(start, end, step) {
        const ARR = [];
        let i = start;
        while (i <= end) {
            ARR.push(i);
            i += step;
        }
        return ARR;
    }

    generateShuffled(start, end, step) {
        const ARR = this.generate(start, end, step);
        return this.shuffle(ARR);
    }
}

export default Utility;
