# Installation

```
npm install ng-parse-irc-color
```

Add ParseIrcColorModule to your @NgModule :  

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ParseIrcColorModule} from 'parse-irc-color';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParseIrcColorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```  

# How to use  

Html:
```html
<div [innerHTML]="ircText | ircColor"></div>
```

