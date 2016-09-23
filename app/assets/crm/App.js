Ext.application({
    name: 'crm',
    appFolder: 'crm',
    appProperty: 'app',
    autoCreateViewport: false,
    locale: '',
    info: {},

    requires: [
        'Ext.state.*',
        'Ext.window.MessageBox',
    ],

    views: [
        'Viewport',
        'main.AppSearch'
    ],

    controllers: [
        'crm.controller.MainMenuCtrl',
        'crm.controller.ReferencesMenuCtrl'
    ],

    models: [
        // 'someModels',
    ],

    stores: [
        // 'someStore',
        'crm.store.ReferencesMenuStore'
    ],

    init: function() {
        console.info('app: init');
        window.app = this;
        Ext.Date.dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        // var myLocalStore;
        // myLocalStore = Ext.state.LocalStorageProvider.create();
        // Ext.state.Manager.setProvider(myLocalStore);

        console.info('app: init: control');
        app.control({
            // handlers
        });
        console.info('app: init: getViewPort');
        app.getViewPort().show();
        return true;
    },


    getViewPort: function() {
        var cmp;
        cmp = Ext.getCmp('appViewport');
        if (!cmp) {
            cmp = Ext.create('crm.view.Viewport');
        }
        return cmp;
    }

});