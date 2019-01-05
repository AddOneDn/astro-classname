## astro-classname

A small and powerful package which can help you change or add classnames quickly and easily

### install

npm: 

```
npm install astro-classname
```

yarn: 

```
yarn add astro-classname
```

### Usage

You can set anything to the classname，but the value that was associated with a given key is falsy， it will not be effective。Object has the highest priority

**Before you use，you should require or import the package**

You can also add classname to dom directly

```javascript
classname('tom', 'bob'); // tom bob
classname('tom', { bob: true }); // tom bob
classname('tom', { bob: false }); // tom
classname({ 'tom-bob': true }); // tom-bob
classname({ tom: false }, { bob: true }); // bob
classname({ tom: false, 'bob': true }); // bob

classname('tom', { bob: false }, 'lili', undefined, 0, 1, null, { hey: 0 }, '') // tom lili 0 1
```

Usage with react!

```javascript
import cn from 'astro-classname';

classname('button', {
  'btn-pressed': this.state.isPressed,
  'btn-over': !this.state.isPressed && this.state.isHovered
})
```

Usage with jquery!
```javascript
classname($('btn'), 'tom', 'bob');
classname(document.getElementById('btn'), { tom: true });
```

You can use all the methods in anywhere
