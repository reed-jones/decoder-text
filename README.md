# decoder-text

## Installation
```sh
yarn add @j0nz/decoder-text
```

### Setup
```js
import DecoderText from '@j0nz/decoder-text'
Vue.use(DecoderText)
```

### Example
```html
<decoder-text
  v-model='model'
  :target='text'
  :fps='24'
  :resetWord='false'
  :steps='4'
  @start='startFunc'
  @end='endFunc'
  @abort='cancelFunc'
/>
```

| Prop | Type | Description |
| -- | -- | -- |
| target | string | Desired end state after decoding is complete |
| value | string | Current state of text. (is all jumbled up during decoding) |
| fps | number | frames per second (how fast to switch characters) |
| steps | number | how many letters are jumbled at any given time |
| resetWord | boolean | reset between target changes (or not) |

| Events | Returns | Description |
| -- | -- | -- |
| start | returns the word that was started | Occurs when a new word is started |
| end | returns the word that finished | Occurs when a word finishes |
| abort | returns two params, the cancelled word and the newly started word | Occurs when a new word is started before the old word finishes |

