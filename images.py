from simple_image_download import simple_image_download as sid


response = sid.simple_image_download 

keywords = ['oranges','oranges tree']

for kw in keywords:
    response.download(kw, 200)