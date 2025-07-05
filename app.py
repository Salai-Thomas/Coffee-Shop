from flask import Flask , render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # serve your existing static HTML

if __name__ == '__main__':
    app.run(debug=True)