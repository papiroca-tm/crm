Ext.define('crm.store.ReferencesMenuStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.proxy.Ajax'
    ],

    proxy:{
        type: 'ajax',
        url: 'references/getRefTree'
    },

    root: {
        text: 'root',
        expanded: true
    }

});
