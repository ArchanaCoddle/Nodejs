console.log(__filename, '    sample path');
console.log(__dirname, '  main directory');

exports.sample = function () {
  global.console.log('bllaablaaaa');
};

// module.export.sample = sample;
