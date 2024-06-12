from flask import Flask, request, render_template, jsonify, make_response
import pickle
import pandas as pd
from flask_cors import CORS

# instantiate the app
app=Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5173"}})

#loading the model
model=pickle.load(open('model.pkl','rb'))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    #parsing the incoming json data
    data=request.get_json()

    #extracting the features
    features = [
        data['gender'],
        data['age'],
        data['hypertension'],
        data['heart_disease'],
        data['smoking_history'],
        data['bmi'],
        data['HbA1c_level'],
        data['blood_glucose_level']
    ]

    # Preparing the data for prediction
    df = pd.DataFrame([features])

    #predicting the result
    prediction = model.predict(df)
    result = 'Diabetic' if prediction[0] == 1 else 'Not Diabetic'
    recom='You are already healthy!'
    if data['blood_glucose_level'] > 120:
        recom = 'Try controlling your carbs intake and lower down the calories'

    return make_response(jsonify({'prediction': result, 'recommendation': recom}))

if __name__=="__main__":
    app.run(debug=True, port=8080)