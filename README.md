# @pbritto/react-hooks

> A collection of utility react hooks

[![NPM](https://img.shields.io/npm/v/@pbritto/react-hooks.svg)](https://www.npmjs.com/package/@pbritto/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @pbritto/react-hooks
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from '@pbritto/react-hooks'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [pedrobritto](https://github.com/pedrobritto)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
