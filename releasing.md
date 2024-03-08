# How to cut a release

## Prepare the release

First, create a pull request preparing the release.
Here's [an example](https://github.com/cerbos/cerbos-sdk-javascript/pull/136).

### Check out branch from latest `main`

```console
$ git fetch upstream

$ git switch --no-track --force-create prepare-release upstream/main
```

### Add any missing changelog entries

Check the "Unreleased" sections of the changelogs cover all of the changes in the pending release.
The [history for the `packages` directory](https://github.com/cerbos/cerbos-sdk-javascript/commits/main/packages) should show the relevant commits.

### Bump versions

If the `core` package has changed, bump its version, and update the `@cerbos/core` dependency in the other packages to match.
Add a changelog entry to the other packages.

```markdown
### Changed

- Bump dependency on [@cerbos/core] to ${version} ([#${pull request}](https://github.com/cerbos/cerbos-sdk-javascript/pull/${pull request}))

```

If another package (except `test`) has changed (including if only its `@cerbos/core` dependency has increased), bump its version.
Note that the version numbers do not have to match, and we don't have to release packages that haven't changed.
Development dependency updates don't require a release.

While we're still in 0.x, anything goes as far as the [Semantic Versioning specification](https://semver.org) is concerned.
However, we should stick with the convention of

- backwards-incompatible changes or added features bump the minor version, and
- bug fixes that do not change the public API bump the patch version.

### Update lockfile

Update `pnpm-lock.yaml` to reflect the new versions.

```console
$ pnpm install
```

### Update the changelogs

We're using the format specified by [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

For each of the packages that have changed, add a new version heading under "Unreleased", and revert the unreleased section to "No notable changes.

```markdown
No notable changes.

## [${version}] - ${yyyy}-${mm}-${dd}

```

Add a link for the diff to the bottom of the changelog, and update the unreleased diff link.

```markdown
[unreleased]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/${package}@${version}...HEAD
[${version}]: https://github.com/cerbos/cerbos-sdk-javascript/compare/@cerbos/${package}@${previous version}...@cerbos/${package}@${version}
```

### Commit changes and open pull request

```console
$ git add --patch

$ git commit --signoff --message="chore(release): Prepare releases

@cerbos/${package}: ${version}
..."

$ git push --set-upstream origin prepare-release
```

## Publish the release

### Merge the pull request

### Fetch latest main

```console
$ git fetch upstream
```

### Push release tags to GitHub

For each changed package, create a signed release tag (see [GitHub's documentation about GPG signature verification](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification#gpg-commit-signature-verification)).

```console
$ git tag --sign --message="@cerbos/${package}@${version}" @cerbos/${package}@${version} upstream/main

$ git push upstream @cerbos/${package}@${version}
```

Pushing a tag triggers GitHub Actions to publish the corresponding package to the npm registry.
