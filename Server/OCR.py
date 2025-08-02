from PIL import Image
import pytesseract
import cv2

import google.generativeai as genai

im = cv2.imread("Scanned_20250803-0216.jpg")

gray = cv2.cvtColor(im,cv2.COLOR_BGR2GRAY)

# blur = cv2.GaussianBlur(gray,(5,5),0)

# thresh = cv2.adaptiveThreshold(blur,255,cv2.ADAPTIVE_THRESH_GAUSSIAN_C,cv2.THRESH_BINARY,11,2)
# resized = cv2.resize(thresh, None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)


bill_details = pytesseract.image_to_string(im)
print(bill_details)

genai.configure(api_key="")

model = genai.GenerativeModel(model_name="gemini-1.5-flash")

prompt = f"""
You are Bill discriptor AI who reads details about a bill and generates a human readable discription for it.
It should include details on what is purchased, the date , the price  and the tax details, and the information about the Shop if present as well.
If there is any clear mentioning of the bill amount in letters, you should give more priority to that.


The bill details are as follows : {bill_details}

Keep it short and as a list.
"""

response = model.generate_content(prompt)

print(response.text.strip())

