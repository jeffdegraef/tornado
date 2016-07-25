import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("TestStaticPath.html")
# index
# TestStaticPath

def make_app():
    # settings = {"static_path": os.path.join(os.path.dirname(__file__), "")}
    return tornado.web.Application([
        (r"/", MainHandler),(r"/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./")}),
    ],)

if __name__ == "__main__":
    app = make_app()
    app.listen(8800)
    tornado.ioloop.IOLoop.current().start()
