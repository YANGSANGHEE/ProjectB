from flask import Flask,jsonify,request
from flask_cors import CORS
from model import DataRoute
app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
CORS(app,resources={r'*':{'origins':'http://localhost:3000'}},supports_credentials=True)

@app.route('/test',methods=['GET'])
def test():
  data = DataRoute.test()
  return jsonify(data)