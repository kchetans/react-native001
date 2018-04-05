export default [
    {
        "type"       : "auto_complete",
        "title"      : "Select City ",
        "dataOptions": [
            "Delhi",
            "Mumbai",
            "Puna",
            "Banglore"
        ]
    },
    {
        "type"        : "auto_complete",
        "title"       : "Default Value",
        "defaultValue": "Banglore",
        "dataOptions" : [
            "Delhi",
            "Mumbai",
            "Puna",
            "Banglore"
        ]
    },
    {
        "type"       : "auto_complete",
        "title"      : "Full With City",
        "full"       : true,
        "dataOptions": [
            "Delhi",
            "Mumbai",
            "Puna",
            "Banglore"
        ]
    },
    {
        "type"   : "auto_complete",
        "title"  : "From Api 1 auto_complete",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions1",
            "method": "GET"
        }
    },
    {
        "type"   : "auto_complete",
        "title"  : "From Api 2 auto_complete",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions2",
            "method": "GET"
        }
    },
    {
        "type"   : "auto_complete",
        "title"  : "From Api 3 auto_complete",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions3",
            "method": "GET"
        }
    }
]
