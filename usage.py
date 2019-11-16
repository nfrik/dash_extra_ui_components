import dash
import dash_html_components as html
from dash.dependencies import Input, Output

import extra_dash_ui_components as ex
from sample_data.org_data import s_data, s_data1

app = dash.Dash(__name__)


app.layout = html.Div(children=[
    ex.OrganizationChartComponent(
        id='input2',
        value=s_data,
        selectionMode='single'
    ),

])


# @app.callback(Output('output', 'children'), [Input('input', 'value')])
# def display_output(value):
#     return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
