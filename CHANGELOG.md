
# Changelog

## :)

### Format

Based on [Keep a Changelog].

### Versioning Policy

[Semantic Versioning Caret]

## Versions

### 0.3.1

#### Added

* The ShowVersion decorator is added.

### 0.3.0

#### Removed

* The RunSync decorator is removed. Instead, use Run. 

### 0.2.1

#### Fixed

* RunSync was not exported, but is fixed now. 

### 0.2.0

#### Added

* RunSync decorator.

#### Changed

* The runSync function no longer calls methods decorated with Run. Instead, use the RunSync decorator.

### 0.1.2

#### Added

* Asynchronous runner.

### 0.1.1

#### Added

* MissingAttributeError returns appropriate messages.

[Keep a Changelog]: http://keepachangelog.com/en/1.0.0/
[Semantic Versioning Caret]: https://github.com/myowncake/semver-caret
