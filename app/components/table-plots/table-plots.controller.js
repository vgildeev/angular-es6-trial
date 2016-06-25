const U = new WeakMap();

class TablePlotsCtrl {
    constructor(Utility) {
        this.tData = {};
        this.chart = {};

        U.set(this, Utility);
        this.showTable1();
    }

    showTable1() {
        this.chart.data = this.tData.data = this.getTable1Data();
        this.chart.type = 'scatter';
    }

    showTable2() {
        const DATA = this.getTable2Data();
        this.tData.data = DATA.data;
        this.chart.data = DATA.table.y;
        this.chart.type = 'bar';
    }

    getTable1Data() {
        const TABLE = {
            x: U.get(this).generateShuffled(1, 10, 1),
            y: U.get(this).generateShuffled(1, 10, 1)
        };

        const DATA = TABLE.x.map( (item, idx) => {
            return {x: item, y: TABLE.y[idx]};
        });

        return DATA;
    }

    getTable2Data() {
        const TABLE = {
            x: U.get(this).generate(2, 10, 2),
            y: U.get(this).generate(1, 10, 1)
        };

        const DATA = TABLE.x.map( (item, idx) => {
            return {x: item, y: TABLE.y[idx]};
        });

        return {
            data: DATA,
            table: TABLE
        };
    }
}

TablePlotsCtrl.$inject = ['Utility'];

export default TablePlotsCtrl;
