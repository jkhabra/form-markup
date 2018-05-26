from flask_script import Manager
from .import app

cli = Manager(app)


@cli.command
def web():
    """Run the web server"""
    print('running server...........')
    app.run(debug=True)
