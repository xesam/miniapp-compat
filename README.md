# xesam/miniapp-compat

```javascript
if (typeof wx === 'object') {
    return wx;
} else if (typeof qq === 'object') {
    return qq;
} else if (typeof my === 'object') {
    return my;
} else if (typeof swan === 'object') {
    return swan;
} else if (typeof tt === 'object') {
    return tt;
} else {
    return null;
}

```