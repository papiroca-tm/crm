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
        // 'someController'
    ],

    models: [
        // 'someModels',
    ],

    stores: [
        // 'someStore',
        'crm.store.TmpStore'
    ],

    init: function() {
        console.info('app: init');
        window.app = this;

        Ext.Date.dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        // var myLocalStore;
        // myLocalStore = Ext.state.LocalStorageProvider.create();
        // Ext.state.Manager.setProvider(myLocalStore);

        // app.loadingMessage('Запуск...');
        // window.crm = window.crm || { app: this };
        // app.hideLoadingMessage();
        console.info('app: init: control');
        app.control({
            // 'appHeader button[action=logout]': {
            //     click: this.onLogout
            // },
            // 'appHeader #app-header-company': {
            //     linkclick: this.onCompanyClick
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
    },

    loadingMessage: function(value) {
        return Ext.get('loading-msg').update(value);
    },

    hideLoadingMessage: function() {
        Ext.get('loading').remove();
        return Ext.fly('loading-mask').animate({
            opacity: 0,
            remove: true
        });
    }

});




















        // this.security = Ext.create('Agrosignal.model.Security');
        // this.setLocale('ru');

        // this.on({
        //     companyIdSelected: this.onCompanyIdSelected,
        //     login: this.onLogin,
        //     scope: this
        // });

        // Ext.override(Ext.data.Connection, {
        //     timeout: 1000 * 60 * 60
        // });


    // launch: function() {
    //     Ext.tip.QuickTipManager.init();
    //     Ext.apply(Ext.tip.QuickTipManager.getQuickTip(), {
    //         showDelay: 1000
    //     });
    //     return this.security.verify((function(_this) {
    //         return function(success) {
    //             return _this.loadView(success);
    //         };
    //     })(this));
    // },
    // showUI: function(isLoggedIn) {
    //     var control;
    //     if (isLoggedIn) {
    //         this.getViewPort().setLoading({
    //             msg: 'Обновление данных'
    //         });
    //         control = this.getUserLabel();
    //         control.update(this.security.getDisplayName());
    //         this.updateCompanies((function(_this) {
    //             return function() {
    //                 _this.fireEvent('updateUI', true);
    //                 return _this.getViewPort().setLoading(false);
    //             };
    //         })(this));
    //     } else {
    //         Ext.create('Agrosignal.view.LoginDialog').show();
    //     }
    //     return true;
    // },
    // loadView: function(isLoggedIn) {
    //     return this.showUI(isLoggedIn);
    // },
    // onLogout: function() {
    //     return Ext.MessageBox.show({
    //         title: 'Выход из программы',
    //         msg: 'Выход из программы. <br />Вы уверены?',
    //         buttons: Ext.MessageBox.YESNO,
    //         fn: (function(_this) {
    //             return function(btn) {
    //                 if (btn === 'yes') {
    //                     return _this.doLogout();
    //                 }
    //             };
    //         })(this),
    //         icon: Ext.MessageBox.QUESTION
    //     });
    // },
    // onLogin: function(success) {
    //     return this.showUI(success);
    // },
    // doLogout: function() {
    //     this.fireEvent('beforeUserLogout');
    //     return this.security.logout((function(_this) {
    //         return function(success) {
    //             return _this.showUI(!success);
    //         };
    //     })(this));
    // },
    // updateCompanies: function(cb) {
    //     var store;
    //     store = this.getCompaniesStore();
    //     return store.load({
    //         callback: (function(_this) {
    //             return function() {
    //                 var count, localCompanyId;
    //                 count = store.getTotalCount();
    //                 localCompanyId = parseInt(window.localStorage.getItem('companyId'), 10);
    //                 if (count === 1) {
    //                     _this.onCompanyIdSelected(store.getAt(0).getId());
    //                 } else {
    //                     if (localCompanyId) {
    //                         _this.fireEvent('companyIdSelected', localCompanyId, true);
    //                     } else {
    //                         _this.onCompanyIdSelected(null);
    //                     }
    //                 }
    //                 return cb();
    //             };
    //         })(this)
    //     });
    // },
    // setServerCompanyId: function(companyId, callback) {
    //     return Ext.Ajax.request({
    //         url: 'setSelectedCompany',
    //         method: 'POST',
    //         jsonData: {
    //             companyId: companyId
    //         },
    //         success: function(result, request) {
    //             var json;
    //             json = Ext.JSON.decode(result.responseText);
    //             if (json) {
    //                 return callback(json[0], null);
    //             }
    //         },
    //         failure: function(result, request) {
    //             return callback(null, result);
    //         }
    //     });
    // },
    // onCompanyIdSelected: function(companyId, byUser) {
    //     var setLabel;
    //     setLabel = function(control, value, el) {
    //         if (value) {
    //             control.el.down(el || 'a').update(value);
    //             return control.updateLayout();
    //         }
    //     };
    //     return this.setServerCompanyId(companyId, (function(_this) {
    //         return function() {
    //             var companyRec, label, value;
    //             _this.selectedCompanyId = companyId;
    //             if (companyId) {
    //                 companyRec = _this.getCompaniesStore().getById(companyId);
    //                 value = companyRec.get('title');
    //             } else {
    //                 companyRec = _this.getCompaniesStore().first();
    //                 value = 'Организаций - ' + _this.getCompaniesStore().getTotalCount();
    //             }
    //             setLabel(_this.getCompanyLabel(), value);
    //             label = Ext.getCmp('app-header-timezone');
    //             label.update(companyRec != null ? companyRec.get('timeZoneId').toString() : void 0);
    //             label.getEl().setStyle('color', 'lightgray');
    //             if (byUser) {
    //                 return _this.fireEvent('updateUI', true);
    //             }
    //         };
    //     })(this));
    // },
    // isSuperAdmin: function() {
    //     return this.getApplication().security.loggedIn.login === 'infobis';
    // },
    // onCompanyClick: function() {
    //     Ext.create('Agrosignal.view.CompanyListDialog').show();
    //     if (this.isSuperAdmin()) {
    //         this.getCreateCompanyButton().setVisible(true);
    //     }
    //     return true;
    // },
    // changeMode: function(tabName) {
    //     this.getTabPanel().setActiveTab(tabName);
    //     return this.fireEvent('modeChanged', tabName);
    // },
    // onMonitorButtonClick: function() {
    //     return this.changeMode('monitortab');
    // },
    // onReportsButtonClick: function() {
    //     return this.changeMode('reportstab');
    // },
    // onReferencesButtonClick: function() {
    //     return this.changeMode('referencestab');
    // },


    // localize: function() {
    //     var controller, i, _results;
    //     i = void 0;
    //     controller = void 0;
    //     i = 0;
    //     _results = [];
    //     while (i < this.controllers.length) {
    //         controller = this.controllers.items[i];
    //         if (controller.localize) {
    //             controller.localize();
    //         }
    //         _results.push(i++);
    //     }
    //     return _results;
    // },
    // setLocale: function(locale) {
    //     var injectScript, languagesLoaded, me, record, urls;
    //     me = this;
    //     injectScript = function() {
    //         return function(url, callback) {
    //             return Ext.Loader.injectScriptElement(url, (function() {
    //                 return callback(true);
    //             }), (function() {
    //                 return callback(false);
    //             }), me);
    //         };
    //     };
    //     languagesLoaded = function(err) {};
    //     record = this.getStore('Languages').findRecord('code', locale, null, null, null, true);
    //     if (record) {
    //         me.locale = locale;
    //         urls = [Ext.util.Format.format('locale/ext-lang-{0}.js', locale), Ext.util.Format.format('locale/as-lang-{0}.js', locale)];
    //         return async.forEach(urls, injectScript(record.charset), languagesLoaded);
    //     }
    // },
    // simpleControllersCache: {},
    // dynamicallyLoadController: function(aControllerName, params) {
    //     var c, fullControllerName, iController, postfix, url;
    //     iController = !params.isSimple ? (c = this.controllers.get(aControllerName), !c ? c = this.getController(aControllerName) : void 0, c) : (url = params.url, url = url.slice(1), postfix = url[0].toUpperCase() + url.slice(1), fullControllerName = aControllerName + postfix, c = this.simpleControllersCache[fullControllerName], !c ? (this.simpleControllersCache[fullControllerName] = Ext.create('Agrosignal.controller.' + aControllerName, {
    //         params: params
    //     }), c = this.simpleControllersCache[fullControllerName]) : void 0, c);
    //     return iController;
    // },
    // onHeaderTitleClick: function() {
    //     return this.getController('ControlAboutDialog').ShowDialog();
//     }
//