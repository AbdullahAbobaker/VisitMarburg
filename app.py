from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///comments.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    experience = db.Column(db.String(200), nullable=False)
    timestamp = db.Column(db.DateTime, server_default=db.func.now())


with app.app_context():
    db.create_all()


@app.route("/comments", methods=["GET"])
def get_comments():
    comments = Comment.query.all()
    return jsonify(
        [
            {
                "name": comment.name,
                "experience": comment.experience,
                "timestamp": comment.timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            }
            for comment in comments
        ]
    )


@app.route("/comments", methods=["POST"])
def add_comment():
    data = request.json
    new_comment = Comment(name=data["name"], experience=data["experience"])
    db.session.add(new_comment)
    db.session.commit()
    return (
        jsonify(
            {
                "name": new_comment.name,
                "experience": new_comment.experience,
                "timestamp": new_comment.timestamp.strftime("%Y-%m-%d %H:%M:%S"),
            }
        ),
        201,
    )


@app.route("/comments", methods=["DELETE"])
def clear_comments():
    db.session.query(Comment).delete()
    db.session.commit()
    return "", 204


if __name__ == "__main__":
    app.run(debug=True)
