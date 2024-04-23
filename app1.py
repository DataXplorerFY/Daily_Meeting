from flask import Flask, request, jsonify
import cv2
import pandas as pd
import numpy as np
from collections import Counter
from your_script import object, count_objects_in_all_images

app = Flask(__name__)

@app.route('/count_oranges', methods=['POST'])
def count_oranges():
    images = request.files.getlist('images')
    images_loaded = []
    for img in images:
        img = cv2.imread(img)
        img = cv2.resize(img, (640, 640))
        if img is not None:
            images_loaded.append(img)
   
    total_orange_count = count_objects_in_all_images(images_loaded)
    return jsonify({'total_orange_count': total_orange_count})

if __name__ == '__main__':
    app.run(debug=True)



