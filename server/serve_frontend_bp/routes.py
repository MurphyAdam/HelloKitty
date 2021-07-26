# -*- coding: utf-8 -*-
from flask import send_from_directory
from server.serve_frontend_bp import serve_frontend_bp
from flask import current_app


@serve_frontend_bp.route('/', defaults={'path': ''})
@serve_frontend_bp.route('/<path:path>')
def catch_all(path):
    return send_from_directory('../client/build/', 'index.html')


@serve_frontend_bp.route('/uploads/blog/<filename>', methods=['GET'])
def send_uploaded_file(filename=''):
    return send_from_directory(current_app.config["UPLOAD_FOLDER"], filename)
