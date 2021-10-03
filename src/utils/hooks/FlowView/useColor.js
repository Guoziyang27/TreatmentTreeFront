/*
 * Copyright 2021 Zhejiang University
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import {useMemo} from "react";

function tanh(x) {
    return (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
}

const useRateColor = (r, baseColor) => {
    const color = useMemo(() => {
        if (isNaN(r)) {
            return baseColor[0];
        }
        const bColor = r > 0 ? baseColor[0] : baseColor[1];
        const rr = tanh(r * 3 * 2) / 2;
        // console.log(r,rr, bColor);
        const rgb = bColor.substring(4, bColor.length-1)
            .replace(/ /g, '')
            .split(',')
            .map(v => (255 - v) / 0.5 * (0.5 - Math.abs(rr)) + parseFloat(v));
        // console.log(rgb);
        return "rgb(" + rgb.join(", ") + ")";
    }, [r, baseColor]);

    return color;
}

export default useRateColor;
