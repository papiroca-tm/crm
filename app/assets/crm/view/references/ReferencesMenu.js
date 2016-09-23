Ext.define('crm.view.references.ReferencesMenu', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.referencesMenu',
    requires: [
        'Ext.button.Button',
        'Ext.form.Label',
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
                action: 'onChangeBtnClick'
            }
        ]
    },

    width: '100%',
    store: 'crm.store.ReferencesMenuStore',
    rootVisible: true,
    border: false,
    listeners: {
        itemclick : function(tree, record, item, index, e, options) {
            console.log('ReferencesMenu: itemclick');
        }
    }
});
