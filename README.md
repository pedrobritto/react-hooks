# @pibritto/react-hooks

> A collection of utility react hooks

[![NPM](https://img.shields.io/npm/v/@pibritto/react-hooks.svg)](https://www.npmjs.com/package/@pibritto/react-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @pibritto/react-hooks
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from '@pibritto/react-hooks'

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
