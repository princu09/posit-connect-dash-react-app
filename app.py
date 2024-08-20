import dash
from dash import dcc, html
from dash_local_react_components import load_react_component, config

config.import_files_root_path = "/public/"

external_scripts = [
    {"src": "https://cdn.tailwindcss.com"},
    {"src": "public/tailwinds.js"},
]

app = dash.Dash(__name__, external_scripts=external_scripts)

# Load the custom component
CustomComponent = load_react_component(app, "public/react_component", "MeghaMenu.js")

# Use the custom component in a layout
app.layout = html.Div([CustomComponent(id="meghamenu")])

if __name__ == "__main__":
    app.run_server(debug=True)
