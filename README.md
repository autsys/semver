# Compare Semantic Versions

Provide two semantic versions for comparison

## Inputs

### `a`

**Required** first semver

### `b`

**Required** second semver

## Outputs

### `gt`

boolean: a > b

## Example usage

```yaml
name: Compare semver
uses: actions/autsys/semver@v1.0.0
id: compare
with:
  a: ${{ steps.current.outputs.version }}
  b: ${{ steps.latest.outputs.version }}
```
