/**
 * Input to {@link @cerbos/core#Client.listPolicies}.
 *
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * Include disabled policies in the list?
   *
   * @remarks
   * Requires the Cerbos policy decision point server to be at least v0.26.
   *
   * @defaultValue `false`
   */
  includeDisabled?: boolean;

  /**
   * Only include policies with a name matching the given regular expression.
   *
   * @remarks
   * Regular expressions must use the {@link https://golang.org/s/re2syntax | RE2 syntax}.
   * Note that backreferences are not supported.
   *
   * Requires the Cerbos policy decision point server to be at least v0.29.
   */
  nameRegexp?: string;

  /**
   * Only include policies with a scope matching the given regular expression.
   *
   * @remarks
   * Regular expressions must use the {@link https://golang.org/s/re2syntax | RE2 syntax}.
   * Note that backreferences are not supported.
   *
   * Requires the Cerbos policy decision point server to be at least v0.29.
   */
  scopeRegexp?: string;

  /**
   * Only include policies with a version matching the given regular expression.
   *
   * @remarks
   * Regular expressions must use the {@link https://golang.org/s/re2syntax | RE2 syntax}.
   * Note that backreferences are not supported.
   *
   * Requires the Cerbos policy decision point server to be at least v0.29.
   */
  versionRegexp?: string;
}
