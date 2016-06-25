import 'components/table-plots/table-plots.tpl.html';

class TablePlots {
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.templateUrl = '/components/table-plots/table-plots.tpl.html';
        this.scope = {
            tableData: '=',
            chartData: '='
        };
    }

    static createInstance() {
        TablePlots.instance = new TablePlots();
        return TablePlots.instance;
    }
}

export { TablePlots };
