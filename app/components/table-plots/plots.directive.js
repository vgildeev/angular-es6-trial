import angular from 'angular';
import Chart from 'chart.js';

class Plot {
    constructor() {
        this.restrict = 'E';
        this.template = '<div><canvas></canvas></div>';
        this.scope = true;
    }

    link(scope, element) {
        let CHART;

        function draw(newData) {
            const DATA = angular.copy(newData);
            if (angular.isDefined(newData)) {
                if (CHART) {
                    CHART.destroy();
                }
                const CTX = element.find('canvas')[0].getContext('2d');
                CHART = new Chart(CTX, {
                    type: scope.chartData.type,
                    data: {
                        labels: ['', '', '', '', ''],
                        datasets: [
                            {
                                label: 'Table Data',
                                backgroundColor: 'rgba(255,99,132,0.2)',
                                borderColor: 'rgba(255,99,132,1)',
                                borderWidth: 1,
                                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                hoverBorderColor: 'rgba(255,99,132,1)',
                                data: DATA,
                            }
                        ]
                    }
                });
            }
        }

        scope.$watch('chartData.data', function(newVal) {
            draw(newVal);
        });

        scope.$on('$destroy', function() {
            if (CHART) {
                CHART.destroy();
            }
        });

        draw(scope.chartData.data);
    }

    static createInstance() {
        Plot.instance = new Plot();
        return Plot.instance;
    }
}

export { Plot };
