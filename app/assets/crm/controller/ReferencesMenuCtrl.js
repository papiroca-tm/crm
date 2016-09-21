Ext.define('crm.controller.ReferencesMenuCtrl', {
    extend: 'Ext.app.Controller',

    views: [
        'crm.view.references.ReferencesMenu'
    ],
    // stores: [],
    refs: [
        {ref: 'refMenu', selector: 'referencesMenu'}
    ],

    init: function() {
        console.info('ReferencesMenuCtrl: init');
        this.callParent();
        this.control({
            // 'mainMenu  button[action="onTaskBtnClick"]': {
            //     "click": this.onTaskBtnClick
            // },
            // 'mainMenu  button[action="onReferencesBtnClick"]': {
            //     "click": this.onReferencesBtnClick
            // },
            // 'mainMenu  button[action="onReportsBtnClick"]': {
            //     "click": this.onReportsBtnClick
            // },
            // 'mainMenu  button[action="onCommunityBtnClick"]': {
            //     "click": this.onCommunityBtnClick
            // }
        });
    },



});