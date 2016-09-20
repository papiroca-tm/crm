Ext.define('crm.store.TmpStore', {
    extend: 'Ext.data.Store',

    requires: [
        'crm.model.TmpModel'
    ],

    model: 'crm.model.TmpModel',
    storeId: 'tmpStore',
    data: [
        { id: "id", groupe: "projects", text: "Агросигнал"},
        { id: "id1", groupe: "projects1", text: "Агросигнал1"}
    ],
    proxy: {
        type: 'memory'
    }
});
