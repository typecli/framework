
# Changelog :)

## Format

Based on [Keep a Changelog].

## Versioning Policy

[Semantic Versioning Caret]

## Versions

### 0.6.0

#### Changed

* Parser converts option names to kebab case. 

### 0.5.1

#### Added

* Option decorator also accepts name / negation-name by a single string.

### 0.5.0

#### Changed

* ShowHelp decorator no longer sets the "-h" option, but only "--help".
* ShowVersion decorator no longer sets the "-v" option, but only "--version".

### 0.4.1

#### Added

* `default` option to set default values for arguments and options.

### 0.4.0

#### Added

* ShowVersion decorator.

#### Changed

* Updated libraries.

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
