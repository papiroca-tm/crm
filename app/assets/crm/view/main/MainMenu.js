Ext.define('crm.view.main.MainMenu', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainMenu',

    requires: [
        'Ext.button.Button'
    ],

    width: '100%',
    flex: 1,
    header: {
        items: [
            {
                xtype:'button',
                scale: 'large',
                text: 'Задачи',
                width: 100,
                action: 'onTaskBtnClick'
            },
            {
                xtype:'button',
                scale: 'large',
                text: 'Справочники',
                width: 100,
                action: 'onReferencesBtnClick'
            },
            {
                xtype:'button',
                scale: 'large',
                text: 'Отчеты',
                width: 100,
                action: 'onReportsBtnClick'
            },
            {
                xtype:'button',
                scale: 'large',
                text: 'Сообщество',
                action: 'onCommunityBtnClick'
            }
        ]
    },
    items: [
        // {
        //     xtype: 'menu',
        //     width: '100%',
        //     height: 500,
        //     plain: true,
        //     border: false,
        //     // floating: false,  // usually you want this set to True (default)
        //     store: 'SearchStore',
        //     showEmptyMenu: true,
        //     fields: ['id', 'groupe', 'text']
        // }
    ]
});
