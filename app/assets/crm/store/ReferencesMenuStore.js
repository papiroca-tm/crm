Ext.define('crm.store.ReferencesMenuStore', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            { text: "Отдел разработки", children: [
                { text: "JavaScript", leaf: true },
                { text: "CoffeeScript", leaf: true}
            ] },
            { text: "Отдел техводдержки", children: [ // , expanded: true
                { text: "Оборудование", leaf: true },
                { text: "что то еще", leaf: true}
            ] }
        ]
    }
});
