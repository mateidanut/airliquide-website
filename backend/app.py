from flask import Flask, send_from_directory, jsonify, make_response, g
import pandas as pd
import requests
import dateutil
import sqlite3
import json
import os


app = Flask(__name__)
app.config["DATA_FOLDER"] = "./"
app.config["DATABASE_FILE"] = "sqlite_data.db"
app.config["RAW_DATA_FILE"] = "raw_data.zip"
app.config["CSV_FILENAME"] = "compressor_data.csv"


def make_csv_response(csv_data):
    resp = make_response(csv_data)
    resp.headers[
        "Content-Disposition"
    ] = f"attachment; filename={app.config['CSV_FILENAME']}"
    resp.headers["Content-Type"] = "text/csv"
    return resp


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, "_database", None)
    if db is not None:
        db.close()


def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(app.config["DATABASE_FILE"])
    # db.row_factory = sqlite3.Row
    return db


def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


# ROUTES
@app.route("/api/raw_data")
def download_raw_data():
    return send_from_directory(
        app.config["DATA_FOLDER"], app.config["RAW_DATA_FILE"], as_attachment=True
    )


@app.route("/api/data")
def download_data():
    # all_data = query_db("SELECT * from compressor")
    print(os.listdir())
    all_data = query_db(
        'SELECT json_object("time", TIMESTAMP, "tempA", "BRG STG1 TEMP A", "oilTemp", "OIL DISCH TEMP", "motorCurr", "MOTOR CURRENT") from compressor'
    )
    return jsonify([json.loads(tpl[0]) for tpl in all_data])
    # return json.dumps(all_data)
    # df = pd.read_sql("SELECT * from compressor", get_db())
    # return make_csv_response(df.to_csv(index=False))


# @app.route("/api/data/since/<date>")
# def download_data_since(date):
#     # get data since date
#     # date = convert_date(date)
#     df = pd.read_sql(
#         f'SELECT * from compressor where "TIMESTAMP" >= datetime("{date}")', get_db()
#     )
#     return make_csv_response(df.to_csv(index=False))


# @app.route("/api/data/between/<date_start>/<date_end>")
# def download_data_between(date_start, date_end):
#     # get data since date
#     # date = convert_date(date)
#     df = pd.read_sql(
#         f'SELECT * from compressor where "TIMESTAMP" >= datetime("{date_start}") AND "TIMESTAMP" < datetime("{date_end}")',
#         get_db(),
#     )
#     return make_csv_response(df.to_csv(index=False))


@app.route("/api/upload-best", methods=["POST"])
def upload_best_prediction():
    pass


@app.route("/api/best")
def get_best_prediction():
    pass


@app.route("/api")
def hello():
    return "HELLO!"


if __name__ == "__main__":
    app.run(debug=True)
