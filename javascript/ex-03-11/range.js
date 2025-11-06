    const range = function (start, end, step = 1) {


        if (end === undefined){
            [start, end] = [1, start];
        }

        const isAsc = start < end;

        const intervalo = [];

        for(let i = start; isAsc ? i <= end : i >= end; isAsc ? i += step : i -= step){

            intervalo.push(i);
            
        }
        return intervalo

        
    }

    console.log(range(1, 7, 2))