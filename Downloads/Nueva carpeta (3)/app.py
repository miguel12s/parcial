from curses import flash
from flask import Flask
from flask import render_template,redirect,url_for,request

app=Flask(__name__)

@app.route("/")
def index():
    Usuario=request.form['Usuario'].lower()
    Contraseña=request.form['Contraseña'].lower()
    usuario="miguel"
    if Usuario==usuario:
           if Contraseña==
    return render_template('index.html')
@app.route("/admin")
def admin():
    return render_template('admin.html')
if __name__ == '__main__':
    app.run(debug=True)