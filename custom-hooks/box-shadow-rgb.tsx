export function getBoxShadowAndRgba({
    color,
    vertical_length,
    horizontal_length,
    spread_radius,
    opacity,
    blur_radius,
  }: {
    color: string;
    vertical_length?: number;
    horizontal_length?: number;
    spread_radius?: number;
    opacity: number;
    blur_radius?: number;
  }) {
    const rgba =
      "rgba(" +
      parseInt(color.slice(-6, -4), 16) +
      "," +
      parseInt(color.slice(-4, -2), 16) +
      "," +
      parseInt(color.slice(-2), 16) +
      "," +
      opacity / 100 +
      ")";
  
    const boxShadow = `${horizontal_length}px ${vertical_length}px ${blur_radius}px ${spread_radius}px ${rgba}`;
  
    return [boxShadow, rgba];
  }