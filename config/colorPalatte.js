const base = {
    gray: '#8d919d',
    red: '#D9443F',
    green: '#69CE7A',
    purple: '#726FAB',
    yellow: '#EDDB68'
}

const standardConfig = [-15, -10, -5, 5, 10, 15]
const accentConfig = {
    gray: [-55, -50, -45, -40, -35, -30, -25, 5, 10, 15, 20, 25, 30],
    red: standardConfig,
    green: standardConfig,
    purple: standardConfig,
    yellow: standardConfig,
}
const lightenDarken = (color, percent) => {
    var num = parseInt(color, 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00FF) + amt,
        G = (num & 0x0000FF) + amt;

    return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};

const makeAccents = (color, percents) => {
    color = color.split('#').join('')
    let accentObj = {}
    percents.forEach(percent => {
        let accentHex = lightenDarken(color, percent);
        let prefix = percent > 0 ? 'lighten' : 'darken';
        accentObj[`${prefix}-${Math.abs(percent)}`] = `#${accentHex}`;
    });
    return accentObj;
}

const makeAllAccents = () => {
    let allAccents = {}

    Object.keys(accentConfig).forEach((key) => {
        allAccents[key] = makeAccents(base[key], accentConfig[key])
    })
    return allAccents;
} 
module.exports = makeAllAccents;

