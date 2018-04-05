/** WARNING **/
/**
 * Before Making any changes this file, make sure you change those values into Server App also.
 * This is common file shared between both the projects
 */
module.exports = {

    WebHookConstants   : {
        METHOD     : 'GET',
        GET_METHOD : 'GET',
        POST_METHOD: 'POST'
    },
    WxComponents       : {
        LIST         : 'list',
        AUTO_COMPLETE: 'auto_complete',
        RADIO        : 'radio',
        DROP_DOWN    : 'drop_down',
        LINK         : 'link',
        CODE         : 'code',
        POPOVER      : 'popover',
        MULTI_SELECT : 'multi_select',
        ARRAY        : 'array',
        ICON         : 'icon',

        BUTTON_FLAT           : 'flat_button',
        BUTTON_RAISED         : 'raised_button',
        BUTTON_ICON           : 'icon_button',
        BUTTON_FAB            : 'floating_action_button',
        BUTTON_UPLOAD         : 'button_upload',
        TOGGLE                : 'toggle',
        IMAGE_PREVIEW_UPLOADER: 'image_preview_uploader',

        TEXT     : 'text',
        TEXT_AREA: 'text_area',

        DATE: 'date',
        TIME: 'time',

        AVATAR : 'avatar',
        BADGE  : 'badge',
        DIVIDER: 'divider',

        CHECKBOX: 'checkbox',
        SLIDER  : 'slider',
        DIALOG  : 'dialog',

        HEADER: 'header',
        SPAN  : 'span',

        SECTION          : 'section',
        CARD_STACK       : 'card_stack',
        PAGE             : 'page',
        MENU             : 'menu',
        MENU_ITEM        : 'menu_item',
        TABLE            : 'table',
        TAB              : 'tab',
        TABS             : 'tabs',
        PAPER            : 'paper',
        VERTICAL_STACK   : 'vertical_stack',
        ROW_COL_CONTAINER: 'row_col_container',
        FORM             : 'form',
        LIST_CONTAINER   : 'list_container',


    },
    WxElementsConstants: {
        WxTextFieldConstant   : {
            DISABLED: false,
            TYPE    : 'text',
            FULL    : false
        },
        WxTextAreaConstant    : {
            ROWS    : 1,
            DISABLED: false,
            TYPE    : 'text',
            FULL    : false
        },
        WxCheckBoxConstant    : {
            LABEL_POSITION: 'right',
            DISABLED      : false,
            CHECKED       : false
        },
        WxDatePickerConstant  : {
            DISABLED: false
        },
        WxToggleConstant      : {
            DISABLED      : false,
            VALUE         : false,
            LABEL_POSITION: 'right'
        },
        WxSliderConstant      : {
            DISABLED: false,
            VALUE   : 0
        },
        WxFlatButtonConstant  : {
            DISABLED      : false,
            LABEL_POSITION: 'left'
        },
        WxRaisedButtonConstant: {
            DISABLED      : false,
            LABEL_POSITION: 'left'
        },
        WxFABButtonConstant   : {
            DISABLED: false,
            MINI    : false
        },
        WxUploadButtonConstant: {
            DISABLED      : false,
            LABEL_POSITION: 'right'
        },
        WxIconButtonConstant  : {
            DISABLED: false
        },
        WxTableConstant       : {
            SHOW_CHECK_BOX: false
        },
        WxAvatarConstant      : {
            SIZE: 40
        },
    }

};
