Ext.define('crm.store.ReferencesMenuStore', {
    extend: 'Ext.data.TreeStore',
    root: {
        expanded: true,
        children: [
            { id: 'oit', text: "Отдел разработки", children: [
                { id: 'js', text: "JavaScript", leaf: true },
                { id: 'cs', text: "CoffeeScript", leaf: true}
            ] },
            { id: 'sup', text: "Отдел техводдержки", children: [ // , expanded: true
                { id: 'device', text: "Оборудование", leaf: true },
                { id: 'someShit', text: "что то еще", leaf: true}
            ] }
        ]
    }
});
