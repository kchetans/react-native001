export default {
    "type"        : "section",
    "isExpandable": true,
    "title"       : "Button Section",
    "subTitle"    : "Sample Button",
    "fields"      : [
        {
            "type"      : "vertical_stack",
            "rowSpacing": 10,
            "fields"    : [
                {
                    "type" : "raised_button",
                    "title": "Button Raised"
                },
                {
                    "type" : "raised_button",
                    "title": "Icon Button Raised",
                    "icon" : "cloud-download"
                },
                {
                    "type"     : "raised_button",
                    "title"    : "Icon Color",
                    "icon"     : "cloud",
                    "iconColor": "white"
                },
                {
                    "type"         : "raised_button",
                    "title"        : "Right Icon",
                    "icon"         : "cloud",
                    "iconColor"    : "white",
                    "labelPosition": "right"
                },
                {
                    "type"     : "floating_action_button",
                    "title"    : "Button FAB",
                    "icon"     : "add_to_photos",
                    "iconColor": "white"
                },
                {
                    "type" : "flat_button",
                    "title": "Flat Button"
                },
                {
                    "type" : "icon_button",
                    "title": "Icon Button",
                    "icon" : "cloud-download"
                },
                {
                    "type" : "button_upload",
                    "title": "Upload",
                    "icon" : "cloud-download"
                },
                {
                    "type" : "button_upload",
                    "title": "Upload 2"
                }
            ]
        }
    ]
}
