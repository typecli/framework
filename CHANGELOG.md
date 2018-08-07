
# Changelog

## :)

### Format

Based on [Keep a Changelog].

### Versioning Policy

[Semantic Versioning Caret]

## Versions

### [Edge (HEAD)][edge]

### [0.2.1]

#### Fixed

* RunSync was not exported, but is fixed now. 

### [0.2.0]

#### Added

* RunSync decorator.

#### Changed

* The runSync function no longer calls methods decorated with Run. Instead, use the RunSync decorator.

### [0.1.2]

#### Added

* Asynchronous runner.

### [0.1.1]

#### Added

* MissingAttributeError returns appropriate messages.

[Keep a Changelog]: http://keepachangelog.com/en/1.0.0/
[Semantic Versioning Caret]: https://github.com/myowncake/semver-caret
[edge]: https://github.com/typecli/framework/compare/v0.2.1...HEAD
[0.1.3]: https://github.com/typecli/framework/compare/v0.2.0...v0.2.1
[0.1.3]: https://github.com/typecli/framework/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/typecli/framework/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/typecli/framework/compare/v0.1.0...v0.1.1
