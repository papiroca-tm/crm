Ext.define('crm.controller.MainMenuCtrl', {
    extend: 'Ext.app.Controller',
    views: ['crm.view.main.MainMenu'],
    // stores: [],
    refs: [
        {ref: 'mainMenu', selector: 'mainMenu'}
    ],

    init: function() {
        this.control({
            'mainMenu  button[action="onTaskBtnClick"]': {
                "click": this.onTaskBtnClick
            },
            'mainMenu  button[action="onReferencesBtnClick"]': {
                "click": this.onReferencesBtnClick
            },
            'mainMenu  button[action="onReportsBtnClick"]': {
                "click": this.onReportsBtnClick
            },
            'mainMenu  button[action="onCommunityBtnClick"]': {
                "click": this.onCommunityBtnClick
            }
        });
    },

    onTaskBtnClick: function() {
        console.log('onTaskBtnClick');
    },

    onReferencesBtnClick: function() {
        console.log('onReferencesBtnClick');
    },

    onReportsBtnClick: function() {
        console.log('onReportsBtnClick');
    },

    onCommunityBtnClick: function() {
        console.log('onCommunityBtnClick');
    }

});
