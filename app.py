from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    # Здесь можно добавить логику для обработки данных, например, сохранение в базу данных или отправка электронной почты
    return f'Данные получены: Имя - {name}, Email - {email}'

if __name__ == '__main__':
    app.run(debug=True)
