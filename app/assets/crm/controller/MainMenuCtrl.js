Ext.define('crm.controller.MainMenuCtrl', {
    extend: 'Ext.app.Controller',

    views: [
        'crm.view.main.MainMenu',
        'crm.view.references.ReferencesMenu'
    ],
    // stores: [],
    refs: [
        {ref: 'mainMenu', selector: 'mainMenu'}
    ],

    init: function() {
        this.callParent();
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
        var menu = this.getMainMenu();
        var cmp = menu.down("referencesMenu");
        if (!cmp) {
            menu.add(
                {xtype: 'referencesMenu'}
            );
        }
        // todo: далее необходимо переносить логику в контроллер меню справочников

    },

    onReportsBtnClick: function() {
        console.log('onReportsBtnClick');
    },

    onCommunityBtnClick: function() {
        console.log('onCommunityBtnClick');
    }

});
