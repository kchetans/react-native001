export default [
    {
        "type"       : "drop_down",
        "title"      : "Select City ",
        "dataOptions": [
            "Delhi",
            "Mumbai",
            "Puna",
            "Banglore",
            "Chennai",
            "Calcutta"
        ]
    },
    {
        "type"        : "drop_down",
        "title"       : "Default Value",
        "defaultValue": "Delhi",
        "dataOptions" : [
            "Delhi",
            "Mumbai",
            "Puna",
            "Banglore"
        ]
    },
    {
        "type"       : "drop_down",
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
        "type"   : "drop_down",
        "title"  : "From Api 1 DropDown",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions1",
            "method": "GET"
        }
    },
    {
        "type"   : "drop_down",
        "title"  : "From Api 2 DropDown",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions2",
            "method": "GET"
        }
    },
    {
        "type"   : "drop_down",
        "title"  : "From Api 3 DropDown",
        "webhook": {
            "url"   : "https://f8f7a522.ngrok.io/apis/ui-examples/getOptions3",
            "method": "GET"
        }
    }
]
