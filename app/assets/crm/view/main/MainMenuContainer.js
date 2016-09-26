Ext.define('crm.view.main.MainMenuContainer', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainMenuContainer',

    requires: [
        'Ext.layout.container.VBox',
        'crm.view.main.AppSearch',
        'crm.view.main.MainMenu'
    ],

    title: 'CRM',
    id: 'main-menu-container',
    region:'west',
    collapsible: true,
    width: 420,
    // border: false,
    header: {
        height: 50
    },
    layout: 'vbox',
    items: [
        {xtype: 'appSearch'},
        {xtype: 'mainMenu'}
    ]
});
