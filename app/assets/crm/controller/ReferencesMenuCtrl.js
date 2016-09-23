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
            'referencesMenu  button[action="onAddBtnClick"]': {
                "click": this.onAddBtnClick
            },
            'referencesMenu  button[action="onRemoveBtnClick"]': {
                "click": this.onRemoveBtnClick
            },
            'referencesMenu  button[action="onChangeBtnClick"]': {
                "click": this.onChangeBtnClick
            }
        });
    },

    onAddBtnClick: function() {
        console.log('onAddBtnClick');
        var tree = this.getRefMenu();
        // var treeStore = tree.getStore();
        var selectedArr = tree.getSelectionModel().getSelection();
        if (selectedArr[0]) {
            var data = {
                leaf: selectedArr[0].data.leaf,
                text: selectedArr[0].data.text,
                path: selectedArr[0].getPath('id', '/')
            };
            console.dir(data);
            data = Ext.JSON.encode(data);
            console.dir(data);
            Ext.Ajax.request({
                url: 'references/add',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                params : data,
                success: function(conn, response, options, eOpts) {
                    console.info('references/add');
                    // todo: что когда данные сервером успешно обработаны?
                    // console.dir(conn);
                    // console.dir(conn.responseText);
                    // console.dir(response);
                    // console.dir(options);
                    // console.dir(eOpts);
                },
                failure: function(conn, response, options, eOpts) {
                    console.error('references/add');
                    // todo: что когда сервер не справился?
                    // console.dir(conn);
                    // console.dir(conn.responseText);
                    // console.dir(response);
                    // console.dir(options);
                    // console.dir(eOpts);
                }
            });
        } else {
            console.log('no selected');
        }
    },

    onRemoveBtnClick: function() {
        console.log('onRemoveBtnClick');
    },

    onChangeBtnClick: function() {
        console.log('onChangeBtnClick');
    }
});