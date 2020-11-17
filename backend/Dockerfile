FROM python:3
WORKDIR /usr/src/app
EXPOSE 5000
COPY . ./
RUN pip3 install --no-cache-dir -r requirements.txt
ENV FLASK_APP=app.py
CMD flask run --host=0.0.0.0
