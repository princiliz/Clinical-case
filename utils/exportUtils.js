const { Parser } = require('json2csv');

exports.exportToCSV = (data) => {
    const parser = new Parser();
    return parser.parse(data);
};