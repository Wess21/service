Свойство `size` для определения размера текста

```typescript jsx
import { Text, Box } from '../index.ts';

<Box column>
  <Box>
    <Text size="h1">Heading h1</Text>
  </Box>

  <Box>
    <Text size="h2">Heading h2</Text>
  </Box>

  <Box>
    <Text size="h3">Heading h3</Text>
  </Box>

  <Box>
    <Text size="h4">Heading h4</Text>
  </Box>

  <Box marginTop={16}>
    <Text>
      This is Standart Primary text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed
      numquam dolores porro temporibus laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam
      deserunt veritatis quia ratione reiciendis.
    </Text>
  </Box>

  <Box marginTop={16}>
    <Text size="secondary">
      This is Secondary text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam
      dolores porro temporibus laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt
      veritatis quia ratione reiciendis.
    </Text>
  </Box>

  <Box marginTop={16}>
    <Text size="caption">
      This is Caption text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam
      dolores porro temporibus laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt
      veritatis quia ratione reiciendis.
    </Text>
  </Box>
</Box>;
```

Свойство `withMargin` для добавления стандартных отступов

```typescript jsx
import { Text, Box } from '../index.ts';

<Box column>
  <Text withMargin>
    This is Standart Primary text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed
    numquam dolores porro temporibus laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt
    veritatis quia ratione reiciendis.
  </Text>
  <Text size="secondary" withMargin>
    This is Secondary text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam
    dolores porro temporibus laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt
    veritatis quia ratione reiciendis.
  </Text>
  <Text size="caption">
    This is Caption text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam dolores
    porro temporibus laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt veritatis quia
    ratione reiciendis.
  </Text>
</Box>;
```

Свойство `weight` для определения типа текста

```typescript jsx
import { Text, Box } from '../index.ts';

<Box>
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam dolores porro temporibus
    laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt veritatis quia ratione
    reiciendis.
  </Text>
  <Text weight="bold">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam dolores porro temporibus
    laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt veritatis quia ratione
    reiciendis.
  </Text>
</Box>;
```

Свойство `uppercase` для определения размера текста

```typescript jsx
import { Text, Box } from '../index.ts';

<Box>
  <Text uppercase style={{ backgroundColor: '#d6d6d6' }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam dolores porro temporibus
    laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt veritatis quia ratione
    reiciendis.
  </Text>
</Box>;
```

Свойство `ellipsis` для добавления многоточия в конце текста

```typescript jsx
import { Text, Box } from '../index.ts';

<Box>
  <Text ellipsis>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam dolores porro temporibus
    laborum itaque voluptates, repellendus iste! Cupiditate sapiente ut totam deserunt veritatis quia ratione
    reiciendis.
  </Text>
</Box>;
```

Свойство `nowrap` для отмены переноса строки

```typescript jsx
import { Text, Box } from '../index.ts';

<Box style={{ maxWidth: '200px', overflow: 'hidden', background: '#ccc' }}>
  <Text nowrap>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rem commodi sed numquam dolores porro temporibus
  </Text>
</Box>;
```

Свойство `color` для изменения цвета текста

```typescript jsx
import { Text, Box } from '../index.ts';

const COLORS = [
  'basicBlack',
  'basicWhite',
  'basicGrey',
  'secondaryYellow',
  'secondaryGreen',
  'secondaryRed',
  'labelBriefing',
  'labelNeedInformation',
  'labelInProgress',
  'labelDone',
  'labelRejected',
  'labelProfile',
  'labelConnection',
  'labelPayment',
  'labelOpenCabinet',
];

<Box column padding={16} style={{ background: '#90b2b3' }}>
  {COLORS.map((c) => (
    <Text key={c} ellipsis color={c}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Text>
  ))}
</Box>;
```

Свойство `textDecoration` для добавления подчеркивания текста

```typescript jsx
import { Text, Box } from '../index.ts';

<Box column>
  <Text textDecoration="underline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
  <Text textDecoration="lineThrough">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
  <Text textDecoration="overline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
</Box>;
```

Свойство `align` для выравнивания текста

```typescript jsx
import { Text, Box } from '../index.ts';

<Box column>
  <Text align="left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
  <Text align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
  <Text align="right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
</Box>;
```

Свойство `href` для оборачивания текста в ссылку

```typescript jsx
import { Text, Box } from '../index.ts';

<Box column>
  <Text href="./#/Атомы/Accordion">Click on text.</Text>
</Box>;
```

Свойство `size=wysiwyg` для выравнивания текста

```typescript jsx
import { Text, Box } from '../index.ts';

<Box column>
  <Text size={'wysiwyg'}>
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H2</h3>
    <h4>H2</h4>
    <p>абзац</p>

    <ul>
      <li>one ul</li>
      <li>two ul</li>
    </ul>

    <ol>
      <li>one ol</li>
      <li>two ol</li>
    </ol>
  </Text>
</Box>;
```
