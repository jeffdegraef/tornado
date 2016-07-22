import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")

class NorsonicHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("indexNorsonic.html")

class TestHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("indexTest.html")

def make_app():
    settings = {"static_path": os.path.join(os.path.dirname(__file__), "")}
    return tornado.web.Application([
        (r"/", MainHandler), (r"/Norsonic", NorsonicHandler), (r"/test", TestHandler), (r"/js/(.*)", tornado.web.StaticFileHandler, {"path": "./js"}), (r"/images/(.*)", tornado.web.StaticFileHandler, {"path": "./images"}), (r"/(.*)", tornado.web.StaticFileHandler, {"path": "./"}),
    ], **settings)

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()
