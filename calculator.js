
// Akkumulátor változóba menti az értéket, a 0 a kezdő értéke az acc-nak
export const calculatDurationSum = duration => duration.reduce((acc, d) => acc + d, 0);
/*{
    
    
    let sum = 0;
    duration.forEach(d => sum+=d);
    return sum;
    
};
*/