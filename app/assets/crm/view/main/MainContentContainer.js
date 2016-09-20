Ext.define('crm.view.main.MainContentContainer', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainContentContainer',

    requires: [
        'Ext.layout.container.Fit'
    ],

    // title: 'Center Region',
    region: 'center',
    layout: 'fit',
    // margins: '5 5 0 0',
    border: false
    // header:{
    //     // titlePosition: 0,
    //     height: 50,
    //     items:[]
    // },
});
