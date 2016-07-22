import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("TestStaticPath.html")

def make_app():
    #settings = {"static_path": os.path.join(os.path.dirname(__file__), "")}
    return tornado.web.Application([
        (r"/", MainHandler), (r"/js/(.*)", tornado.web.StaticFileHandler, {"path": "./js"}),(r"/(.*)", tornado.web.StaticFileHandler, {"path": "./"}),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8800)
    tornado.ioloop.IOLoop.current().start()
