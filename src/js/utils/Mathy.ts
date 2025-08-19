/**
 * @description Math
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export class Mathy {
  /**
   * Lerp
   *
   * @param   {number} a
   * @param   {number} b
   * @param   {number} t
   * @returns {number}
   */
  static lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t
  }
}
