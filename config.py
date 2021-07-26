import os

'''
    Flask config classes.
    All config classes inherit from the base class
    Config.

'''

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    # Set Flask configuration vars.

    '''
    App name and runtime
    '''
    PROJECT_NAME = 'meow'
    APP_NAME = 'server'
    APP_RUNTIME = '3.9.2'
    APP_DESCRIPTION = 'This is a website for Juggle. Using Flask, React and Material-UI'
    BASE_DIR = basedir

    '''
    Environment variables
    '''

    APP_ENV = os.environ.get('APP_ENV') or 'production'
    FLASK_ENV = os.environ.get('APP_ENV') or 'production'
    TESTING = os.environ.get('TESTING') or False
    DEBUG = os.environ.get('DEBUG') or False

    LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT') or False
    SECRET_KEY = os.environ.get('SECRET_KEY') or b'your_secrete_key'


class Development(Config):

    '''
    Environment variabbles
    '''

    APP_ENV = os.environ.get('APP_ENV') or 'development'
    FLASK_ENV = os.environ.get('APP_ENV') or 'development'
    TESTING = os.environ.get('TESTING') or False
    DEBUG = os.environ.get('DEBUG') or True

    LOG_TO_STDOUT = os.environ.get('LOG_TO_STDOUT') or True
    SECRET_KEY = os.environ.get('SECRET_KEY') or b'your_secrete_key'
