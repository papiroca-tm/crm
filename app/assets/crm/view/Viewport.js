Ext.define('crm.view.Viewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.appViewport',

    stores: [
        'crm.store.TmpStore'
    ],

    requires: [
        'Ext.layout.container.Border',
        'crm.view.main.MainContentContainer',
        'crm.view.main.MainMenuContainer'
    ],

    layout: 'border',
    items: [
        {xtype: 'mainMenuContainer'},
        {xtype: 'mainContentContainer'}
    ],
    
    initComponent: function() {
        console.info('Viewport: initComponent');
        this.callParent();
    }

});
