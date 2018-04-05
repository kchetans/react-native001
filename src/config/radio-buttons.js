export default [
    {
        "type"       : "radio",
        "title"      : "Radio Buttons",
        "dataOptions": [
            "Delhi",
            "Mumbai",
            "Puna",
            "Banglore"
        ]
    },
    {
        "type"       : "radio",
        "title"      : "Inline Radio Buttons",
        "inline"     : true,
        "dataOptions": [
            "Delhi",
            "Mumbai",
            "Puna",
            "Banglore"
        ]
    },
    {
        "type"   : "radio",
        "title"  : "From Api 1 Radio Buttons",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions1",
            "method": "GET"
        }
    },
    {
        "type"   : "radio",
        "title"  : "From Api 2 Radio Buttons",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions2",
            "method": "GET"
        }
    },
    {
        "type"   : "radio",
        "title"  : "From Api 3 Radio Buttons",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions3",
            "method": "GET"
        }
    }
];
