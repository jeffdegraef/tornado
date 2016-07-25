import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("TestStaticPath.html")
class NorsonicHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("indexStaticNorsonic.html")

class TestHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("indexStaticReactTest.html")
def make_app():
    settings = {"static_path": os.path.join(os.path.dirname(__file__), "")}
    return tornado.web.Application([
        #(r"/", MainHandler), (r"/js/(.*)", tornado.web.StaticFileHandler, {"path": "./js"}),(r"/(.*)", tornado.web.StaticFileHandler, {"path": "./"}),
        (r"/", MainHandler),
        (r"/Norsonic", NorsonicHandler),
        (r"/test", TestHandler),
        (r"/assets/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./assets")}),
        (r"/css/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./css")}),
        (r"/docs/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./docs")}),
        (r"/fonts/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./fonts")}),
        (r"/images/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./images")}),
        (r"/jqueryui/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./jqueryui")}),
        (r"/js/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./js")}),
        (r"/(.*)", tornado.web.StaticFileHandler, {"path": os.path.join(os.path.dirname(__file__), "./")}),
    ],**settings)

if __name__ == "__main__":
    app = make_app()
    app.listen(8800)
    tornado.ioloop.IOLoop.current().start()
