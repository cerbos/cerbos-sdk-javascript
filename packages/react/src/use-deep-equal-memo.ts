// Based on https://github.com/kentcdodds/use-deep-compare-effect/blob/ec3c204ae3a29be7db8e30fc7ca29dd38d1c9441/src/index.ts#L28-L43

/*
The MIT License (MIT)
Copyright (c) 2020 Kent C. Dodds

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { useMemo, useRef } from "react";

import { deepEqual } from "./deep-equal";

export function useDeepEqualMemo<T>(value: T): T {
  const ref = useRef(value);
  const signalRef = useRef(0);

  if (!deepEqual(value, ref.current)) {
    ref.current = value;
    signalRef.current++;
  }

  return useMemo(() => ref.current, [signalRef.current]); // eslint-disable-line react-hooks/exhaustive-deps
}
