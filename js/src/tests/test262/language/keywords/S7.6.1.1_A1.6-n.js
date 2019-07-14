// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The "delete" token can not be used as identifier
es5id: 7.6.1.1_A1.6
description: Checking if execution of "delete=1" fails
negative:
  phase: early
  type: SyntaxError
---*/

delete = 1;