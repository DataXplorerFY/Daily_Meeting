import cv2
# import numpy as np
# img = cv2.imread("2.jpg", 1) # 0 (Zero) will change the color of image into  graysacle and 1 hee will agaiin convert into RGB image

# cv2.imshow("original_image", img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# abc= cv2.VideoCapture(0) #for capture the video by using the open cv
 #because we want to captur a frame of images so we have to use loops for captuiring the images to make video
# while (True):
#     ret_, frame = abc.read()
#     cv2.imshow("abc", frame)
#     if cv2.waitKey(1) & 0xFF == ord("q"):
#         break
#         abc.release()

# cv2.destroyAllWindows()
 

img_file = "Tree 230(side 1)"
img = cv2.imread(img_file)