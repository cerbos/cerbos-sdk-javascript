/**
 * Information about the Cerbos policy decision point (PDP) server.
 *
 * @public
 */
export interface ServerInfo {
  /**
   * The time at which the PDP server binary was built.
   */
  buildDate: string;

  /**
   * The commit SHA from which the PDP server binary was built.
   */
  commit: string;

  /**
   * The version of the PDP server.
   */
  version: string;
}
