/**
 * A service provided by the policy decision point server.
 */
export enum Service {
  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/api/ | Cerbos policy decision API}.
   */
  CERBOS = "cerbos.svc.v1.CerbosService",

  /**
   * The {@link https://docs.cerbos.dev/cerbos/latest/api/admin_api | admin API}.
   */
  ADMIN = "cerbos.svc.v1.CerbosAdminService",
}
