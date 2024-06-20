import os
from flask import Flask, render_template

app = Flask(__name__)

def get_js_files():
    """Obtiene la lista de archivos JavaScript creados en un directorio específico."""
    js_folder = os.path.join(app.static_folder, 'js')
    js_files = [f'js/{file}' for file in os.listdir(js_folder) if file.endswith('.js')]
    return js_files

# Rutas para las páginas principales
@app.route('/')
def index():
    js_files = get_js_files()
    return render_template('index.html', js_files=js_files)

@app.route('/about')
def about():
    js_files = get_js_files()
    return render_template('about.html',js_files=js_files)

@app.route('/projects')
def projects():
    js_files = get_js_files()
    return render_template('projects.html', js_files=js_files)

@app.route('/contact')
def contact():
    js_files = get_js_files()
    return render_template('contact.html',js_files=js_files)

if __name__ == '__main__':
    app.run(debug=True)
