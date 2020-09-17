/**
 * Generic reponse
 * @export
 * @interface GenericResponse
 * @template T
 */
export interface GenericResponse<T> {
  ok: boolean;
  data?: T;
  message?: string;
}
