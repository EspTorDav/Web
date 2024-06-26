import os
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message
import secrets

app = Flask(__name__)

# Configuración de la clave secreta
app.secret_key = secrets.token_hex(16)

# Configuración de Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Cambia esto por tu servidor SMTP
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'espinosatorresdavid@gmail.com'
app.config['MAIL_PASSWORD'] = 'nnzy gxhg ynwf etvg'

mail = Mail(app)

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

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    js_files = get_js_files()

    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message = request.form.get('message')

         # Enviar correo electrónico con Flask-Mail
        msg = Message(subject=subject,
                      recipients=['espinosatorresdavid@gmail.com'],
                      sender=f'{email}'
                     )
        msg.body = f'Mensaje enviado desde la web: \nDe: {name}\nEmail: {email}\nMensaje:\n{message}'
        
        try:
             mail.send(msg)
             flash('Correo enviado correctamente!', 'success')
        except Exception as e:
             flash(f'Error al enviar el correo: {str(e)}', 'error')
        
        return redirect(url_for('contact'))
    
    return render_template('contact.html',js_files=js_files)

if __name__ == '__main__':
    app.run(debug=True)
