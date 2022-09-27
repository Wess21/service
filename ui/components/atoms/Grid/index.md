Свойство `column` для определения колонок в строке:

```typescript jsx
import { Grid, Box } from '../index.ts';

const [itemStyle] = React.useState({
  height: 50,
  background: '#cacaca',
});

const [style] = React.useState({ width: '100%', background: 'rgb(255 236 219)' });

<>
  <Grid style={style} columns={5} justifyContent="center">
    {Array(10)
      .fill(0)
      .map((_, index) => (
        <Box key={index} style={itemStyle} margin={12} />
      ))}
  </Grid>
</>;
```

Свойство `gap` для определения расстояния между элементами:

```typescript jsx
import { Grid, Box } from '../index.ts';

const [itemStyle] = React.useState({
  height: 50,
  background: '#cacaca',
});

const [style] = React.useState({ width: '100%', background: 'rgb(255 236 219)' });

<>
  <Grid style={style} columns={4} gap={24} justifyContent="center">
    {Array(10)
      .fill(0)
      .map((_, index) => (
        <Box key={index} style={itemStyle} margin={12} />
      ))}
  </Grid>
</>;
```

Свойство `columns` для определения кол-ва колонок для разных breakpoint`ов:

```typescript jsx
import { Grid, Box } from '../index.ts';

const [itemStyle] = React.useState({
  height: 50,
  background: '#cacaca',
});

const [style] = React.useState({ width: '100%', background: 'rgb(255 236 219)' });

<>
  <Grid columns={{ DESKTOP: 4, TAB: 3, MOBILE: 2 }} style={style} gap={24} justifyContent="center">
    {Array(10)
      .fill(0)
      .map((_, index) => (
        <Box key={index} style={itemStyle} margin={12} />
      ))}
  </Grid>
</>;
```

Свойство `gridStart` и `gridEnd` для определения начала и конца контейнера в grid сетке:

```typescript jsx
import { Grid, Box } from '../index.ts';

const [itemStyle] = React.useState({
  height: 50,
  background: '#cacaca',
});

const [style] = React.useState({ width: '100%', background: 'rgb(255 236 219)', marginTop: 16 });

<>
  <Grid columns={{ DESKTOP: 15, TAB: 3, MOBILE: 2 }} style={style} gap={24}>
    <Grid style={itemStyle} colStart={2} colEnd={13} />
  </Grid>

  <Grid rows={{ DESKTOP: 10, TAB: 3, MOBILE: 2 }} style={style}>
    <Grid style={itemStyle} rowStart={4} rowEnd={11} />
  </Grid>
</>;
```
