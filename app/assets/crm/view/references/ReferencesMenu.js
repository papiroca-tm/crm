Ext.define('crm.view.references.ReferencesMenu', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.referencesMenu',
    requires: [
        'Ext.button.Button',
        'Ext.toolbar.Spacer',
        'crm.store.ReferencesMenuStore'
    ],

    header: {
        defaults: {
            margin: '5 5 5 5'
        },

        items: [
            {xtype: 'label', text: 'Справочники'},
            {
                xtype:'button',
                scale: 'small',
                text: 'добавить',
                action: 'onAddBtnClick'
            },
            {
                xtype:'button',
                scale: 'small',
                text: 'удалить',
                action: 'onRemoveBtnClick'
            },
            {
                xtype:'button',
                scale: 'small',
                text: 'изменить',
                action: 'onRemoveBtnClick'
            }
        ]
    },

    width: '100%',
    store: 'crm.store.ReferencesMenuStore',
    rootVisible: true,
    border: false
});
