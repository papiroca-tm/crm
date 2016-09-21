Ext.define('crm.view.references.ReferencesMenu', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.referencesMenu',
    requires: [
        'crm.store.ReferencesMenuStore'
    ],

    title: 'Simple Tree',
    width: '100%',
    store: 'crm.store.ReferencesMenuStore',
    rootVisible: true,
    border: false
});
