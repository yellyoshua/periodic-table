export function getRandomColor(index: number) {
  let key = index;
  let key2 = index;
  const mixColors = ['rgba(233, 30, 99, 0.3)', 'rgba(156, 39, 176, 0.3)', 'rgb(176, 220, 255)', 'rgba(76, 93, 175, 0.34)', 'rgba(39, 176, 174, 0.3)', 'rgba(176, 39, 39, 0.3)'];
  const mixColors2 = ['rgba(255, 171, 0, 0.4)', 'rgba(255, 0, 0, 0.4)', 'rgba(174, 255, 0, 0.4)', 'rgba(0, 255, 120, 0.4)'];
  const mixLineal = [
    'linear-gradient(90deg, rgba(233, 30, 99, 0.3) 40%, rgba(255, 171, 0, 0.4))',
    'linear-gradient(90deg, rgba(76, 93, 175, 0.34) 40%, rgba(0, 255, 120, 0.4))',
    'linear-gradient(90deg, rgb(176, 220, 255) 40%, rgba(255, 0, 0, 0.4))',
    'linear-gradient(90deg, rgb(176, 220, 255) 40%, rgba(255, 0, 247, 0.4))',
    'linear-gradient(90deg, rgba(233, 30, 99, 0.3) 40%, rgba(0, 255, 120, 0.4))'
  ];
  if (!key) {
    key = Math.floor(Math.random() * (mixColors.length - 0)) + mixColors.length;
    key2 = Math.floor(Math.random() * (mixColors.length - 0)) + mixColors.length;
  }
  return {
    background: mixColors[key % mixColors.length],
    linear: `linear-gradient(90deg, ${mixColors[key % mixColors.length]} 40%, ${mixColors2[key2 % mixColors2.length]})`,
    mix: {
      linear: mixLineal[key % mixLineal.length]
    }
  };
}