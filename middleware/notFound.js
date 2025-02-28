const notFound = (req, res) => {
    return res.status(404).json({
        error: "Not found",
        message: "The requested page wasn't found",
    });
};

module.exports = notFound;
