FROM python:alpine

ARG FLASK_DEBUG

EXPOSE 5000

WORKDIR app

COPY * /app/

RUN pip install -r requirements.txt

CMD python __init__.py
