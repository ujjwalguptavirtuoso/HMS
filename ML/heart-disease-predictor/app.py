from flask import Flask, jsonify, make_response, render_template, request 
import pickle
import numpy as np 
from flask_cors import CORS

# Load Random Forest Classifier model
fileName='heart-disease-prediction-random-forest-classifier.pkl'
model=pickle.load(open(fileName, 'rb'))

app=Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route('/')
def home():
    return "Welcome to the Heart Disease API"


@app.route('/heart-disease/predict' , methods=['POST'])
def predict():
    if request.method== 'POST':

        age=int(request.form['age'])
        sex=request.form.get('sex')
        cp = request.form.get('cp')
        trestbps = int(request.form['trestbps'])
        chol = int(request.form['chol'])
        fbs = request.form.get('fbs')
        restecg = int(request.form['restecg'])
        thalach = int(request.form['thalach'])
        exang = request.form.get('exang')
        oldpeak = float(request.form['oldpeak'])
        slope = request.form.get('slope')
        ca = int(request.form['ca'])
        thal = request.form.get('thal')

        data = np.array([[age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]])
        my_prediction = model.predict(data)

        
        result = 'Yes' if my_prediction[0] == 1 else 'No'

        return make_response(jsonify({'my_prediction': result}))
    
    if __name__ == '__main__':
	    app.run(debug=True)