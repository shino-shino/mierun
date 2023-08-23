export const getColorById = (
  id: number,
): 'yuzu' | 'mandarin' | 'lime' | 'grapefruit' | 'lemon' => {
  const colors: ('yuzu' | 'mandarin' | 'lime' | 'grapefruit' | 'lemon')[] = [
    'yuzu',
    'mandarin',
    'lime',
    'grapefruit',
    'lemon',
  ];

  return colors[id % colors.length];
};
