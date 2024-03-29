
class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('I\'m Leader');
    }
}

module.exports = new NewsController;