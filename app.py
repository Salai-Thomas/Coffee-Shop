from flask import Flask , render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  

@app.route('/coffee')
def coffee():
    return render_template('coffee.html')

@app.route('/equip')
def equip():
    return render_template('equip.html')

@app.route('/event')
def event():
    return render_template('event.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/subscription')
def subscription():
    return render_template('subscription.html')
if __name__ == '__main__':
    app.run(debug=True)