/**
 * Created by mmaia on 7/3/16.
 */
const
    size = process.argv[2],
    totl = process.argv[3] || 100;

let buff = [ ];

for(let i=0; i < totl; i++) {
    buff.push(new Buffer(size));
    process.stdout.write((process.memoryUsage().heapTotal) / 1024 / 1024 + ' mb | '
        + (process.memoryUsage().heapUsed) / 1024 / 1024 + ' mb\n');
}