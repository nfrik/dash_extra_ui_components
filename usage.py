import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import extra_dash_ui_components as ex
from sample_data.org_data import sample1, sample2
from sample_data.list_component import cities, cars
from sample_data.carousel import cars_carousel

import json

app = dash.Dash(__name__)
data = [
    {
        "key": "0",
        "label": "Documents",
        "data": "Documents Folder",
                "icon": "pi pi-fw pi-inbox",
                "children": [{
                    "key": "0-0",
                    "label": "Work",
                    "data": "Work Folder",
                    "icon": "pi pi-fw pi-cog",
                    "children": [
                        {"key": "0-0-0", "label": "Expenses.doc",
                            "icon": "pi pi-fw pi-file", "data": "Expenses Document"},
                        {"key": "0-0-1", "label": "Resume.doc",
                            "icon": "pi pi-fw pi-file", "data": "Resume Document"}
                    ]
                },
                    {
                    "key": "0-1",
                    "label": "Home",
                    "data": "Home Folder",
                    "icon": "pi pi-fw pi-home",
                    "children": [{"key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month"}]
                }]
    },
    {
        "key": "1",
        "label": "Events",
        "data": "Events Folder",
                "icon": "pi pi-fw pi-calendar",
                "children": [
                    {"key": "1-0", "label": "Meeting",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting"},
                    {"key": "1-1", "label": "Product Launch",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch"},
                    {"key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review"}]
    },
    {
        "key": "2",
        "label": "Movies",
        "data": "Movies Folder",
                "icon": "pi pi-fw pi-star",
                "children": [{
                    "key": "2-0",
                    "icon": "pi pi-fw pi-star",
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie"}, {"key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie"}]
                },
                    {
                    "key": "2-1",
                    "label": "Robert De Niro",
                    "icon": "pi pi-fw pi-star",
                    "data": "De Niro Movies",
                    "children": [{"key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie"}, {"key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie"}]
                }]
    }
]

items = [
    {'label': 'Categories'},
    {'label': 'Sports'},
    {'label': 'Football'},
    {'label': 'Countries'},
    {'label': 'Spain'},
    {'label': 'F.C. Barcelona'},
    {'label': 'Squad'},
    {'label': 'Lionel Messi', 'url': 'https://en.wikipedia.org/wiki/Lionel_Messi'}
]
home = {'icon': 'tumb tumb-home',
        'url': 'https://github.com/nfrik/ex.git', 'label': 'Home'}

first = 0
rows = 10
first2 = 0
rows2 = 10
carData = []


responsiveOptions = [
    {
        'breakpoint': '1024px',
        'numVisible': 3,
        'numScroll': 3,
    },
    {
        'breakpoint': '768px',
        'numVisible': 2,
        'numScroll': 2,
    },
    {
        'breakpoint': '560px',
        'numVisible': 1,
        'numScroll': 1,
    },
]


data = [
    {
        "key": "0",
        "label": "Documents",
        "data": "Documents Folder",
                "icon": "pi pi-fw pi-inbox",
                "children": [{
                    "key": "0-0",
                    "label": "Work",
                    "data": "Work Folder",
                    "icon": "pi pi-fw pi-cog",
                    "children": [
                        {"key": "0-0-0", "label": "Expenses.doc",
                            "icon": "pi pi-fw pi-file", "data": "Expenses Document"},
                        {"key": "0-0-1", "label": "Resume.doc",
                            "icon": "pi pi-fw pi-file", "data": "Resume Document"}
                    ]
                },
                    {
                    "key": "0-1",
                    "label": "Home",
                    "data": "Home Folder",
                    "icon": "pi pi-fw pi-home",
                    "children": [{"key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month"}]
                }]
    },
    {
        "key": "1",
        "label": "Events",
        "data": "Events Folder",
                "icon": "pi pi-fw pi-calendar",
                "children": [
                    {"key": "1-0", "label": "Meeting",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting"},
                    {"key": "1-1", "label": "Product Launch",
                        "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch"},
                    {"key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review"}]
    },
    {
        "key": "2",
        "label": "Movies",
        "data": "Movies Folder",
                "icon": "pi pi-fw pi-star",
                "children": [{
                    "key": "2-0",
                    "icon": "pi pi-fw pi-star",
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie"}, {"key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie"}]
                },
                    {
                    "key": "2-1",
                    "label": "Robert De Niro",
                    "icon": "pi pi-fw pi-star",
                    "data": "De Niro Movies",
                    "children": [{"key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie"}, {"key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie"}]
                }]
    }
]

items = [
    {'label': 'Categories'},
    {'label': 'Sports'},
    {'label': 'Football'},
    {'label': 'Countries'},
    {'label': 'Spain'},
    {'label': 'F.C. Barcelona'},
    {'label': 'Squad'},
    {'label': 'Lionel Messi', 'url': 'https://en.wikipedia.org/wiki/Lionel_Messi'}
]
home = {'icon': 'tumb tumb-home',
        'url': 'https://github.com/nfrik/extra_dash_ui_components.git', 'label': 'Home'}

first = 0
rows = 10
first2 = 0
rows2 = 10
carData = []
app.layout = html.Div(children=[
    html.Div(id='GoelocatorOutput'),
    ex.GeolocatorComponent(id="Geolocator")
])

@app.callback(Output('GoelocatorOutput', 'children'), [Input('Geolocator','position')])
def display(position):
    print(position)
    return '{}'.format(position)
# @app.callback(Output('output', 'children'), [Input('paginator-default', 'first'),
#                                                 Input('paginator-default', 'rows')])
# def page_change(first, rows):
#     return "asdf"


if __name__ == '__main__':
    app.run_server(host="0.0.0.0", port=int("8080"),debug=True)
