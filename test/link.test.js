const {get} = require('axios');
require('should');
const headers = { 'Content-Type' : 'application/json'};

const cases = [
    {x: 1, xs: 99},
    {x: 2, xs: 255},
    {x: 6, xs: 1599},
    {x:-0.5, xs: 0},
    {x:-0.33333333333333326, xs: 3.0000000000000018},
    {x:-1, xs: 3}

];

cases.forEach(({ x, xs }) =>
    describe(xs + ' asyncAdd()', () =>
      it('respond with revers', async () => {
        const URL1 = `https://kodaktor.ru/api2/there/${x}`;
        const{data: n} = await get(URL1, {headers})
        const URL2 = `https://kodaktor.ru/api2/andba/${n}`;
        const{data: y} = await get(URL2,{headers})

        n.should.equal(xs);
        y.should.equal(x);
      })
    )
);
