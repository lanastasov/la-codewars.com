function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    var difference = startPriceOld - startPriceNew;
    if (difference > 0) return [0, difference];
    var counter = 1;
    percentLossByMonth = (1 - percentLossByMonth / 100);
    while (difference < 0) {
        if (counter % 2 == 0 && counter != 1) {
            percentLossByMonth = (percentLossByMonth - 0.5 / 100);
        }
        startPriceOld = startPriceOld * percentLossByMonth;
        startPriceNew = startPriceNew * percentLossByMonth;
        difference = startPriceOld - startPriceNew + counter * savingperMonth;
        counter += 1;
    }
    return [counter - 1, Math.round(difference)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
