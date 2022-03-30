(function () {
    /* populate the 'data' object */
    /* e.g., data.table = $sp.getValue('table'); */
    data.label = input.label || options.label;
    data.label = gs.getMessage(data.label);
    data.count = 0;

    data.table = input.table || options.table;
    data.sp_page = input.sp_page || options.sp_page || "";

    data.filter = options.filter;
    //data.filter += "^sprint=" + input.sprint;

    data.count = getRecordCount(data.table, data.filter);

    function getRecordCount(table, filter) {
        var ga = new GlideAggregate(table);
        ga.addAggregate("COUNT");
        ga.addEncodedQuery(filter);
        ga.query();
        if (ga.next()) return ga.getAggregate("COUNT");
    }
})();
