# MIRANDA-UI
This is my UI Library built using Web Components to make it Framework-Agnostic
So far, it has been tested with Angular and React

## How to use

`NOTE: Event handlers (click, mouseenter, ...) will be the same as in the framework`
(click) for Angular
@click for Vue
onClick for React/Next

### Angular
Import the component you would like to use in your module:

```
import 'miranda-ui/Button';
```

Use the component as any component: 
```
<m-button (click)="clickBtn($event)">Test Button</m-button>
```

### React
```
import 'miranda-ui/Button';

<m-button id="test-btn" onClick={(e) => handleClickBtn(e)}>Test Button</m-button>
```

### NextJS
You will need to make an dyamic import usin 
```
import { useEffect } from 'react';

useEffect(() => {
    import('miranda-ui/Button');
}, []);

<m-button id="test-btn" onClick={(e) => handleClickBtn(e)}>Test Button</m-button>
```

## Observations
Until now, I'm aware this solution isn't fully compatible with SSR. So, If using SSR solutions like NextJS you might need some additional work like transforming your wrapper component into client component and you might still see some errors while using it.
+ Content inside MirandaUI components will not be indexed by SEO.
