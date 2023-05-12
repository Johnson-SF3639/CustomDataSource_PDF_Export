ej.grids.Grid.Inject(ej.grids.Toolbar, ej.grids.PdfExport, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: filterData,
    allowGrouping: true,
        allowSorting: true,
        allowExcelExport: true,
        allowPdfExport: true,
        toolbar: ['ExcelExport', 'PdfExport'],
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 150, textAlign: 'Right', },
            { field: 'Freight', format: 'C2', textAlign: 'Right', width: 150, editType: 'numericedit' },
            { field: 'ShipCountry', headerText: 'Ship Country', width: 150, textAlign: 'Left', },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        ],
        toolbarClick: toolbarClick
    });
    grid.appendTo('#Grid');
    var gridInstance = grid;
    function toolbarClick(args) {
        switch (args.item.text) {
            case 'PDF Export':
                var pdfExportProperties = {
                    dataSource: hierarchyOrderdata.slice(0, 5),
                    query: gridInstance.getDataModule().generateQuery(true),
                };
                gridInstance.pdfExport(pdfExportProperties);
                break;
            case 'Excel Export':
                var excelExportProperties = {
                    dataSource: hierarchyOrderdata.slice(0, 5),
                    query: gridInstance.getDataModule().generateQuery(true),
                };
                gridInstance.excelExport(excelExportProperties);
                break;
        }
    }
    function actionFailure(args) {
        console.log(args);
    }
