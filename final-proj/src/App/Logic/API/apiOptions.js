export const getMoversOptions = {
    method: 'GET',
    url: 'https://morning-star.p.rapidapi.com/market/v2/get-movers',
    headers: {
        'x-rapidapi-key': '831cb6b458mshbb8093ff1396239p1d1ac7jsn916b6f5260a7',
        'x-rapidapi-host': 'morning-star.p.rapidapi.com'
    }
};

export const getShortInterestOptions = {
    method: 'GET',
    url: 'https://morning-star.p.rapidapi.com/stock/v2/get-short-interest',
    params: {
        performanceId: '0P0000OQN8'
    },
    headers: {
        'x-rapidapi-key': '831cb6b458mshbb8093ff1396239p1d1ac7jsn916b6f5260a7',
        'x-rapidapi-host': 'morning-star.p.rapidapi.com'
    }
};

export const getFinancialsOptions = {
    method: 'GET',
    url: 'https://morning-star.p.rapidapi.com/stock/v2/get-financials',
    params: {performanceId: '0P0000OQN8', interval: 'annual', reportType: 'A'},
    headers: {
      'x-rapidapi-key': '831cb6b458mshbb8093ff1396239p1d1ac7jsn916b6f5260a7',
      'x-rapidapi-host': 'morning-star.p.rapidapi.com'
    }
  };