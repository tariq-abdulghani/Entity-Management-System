import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityViewComponent } from './components/entity-view/entity-view.component';
import { TodoService } from './example/todo.service';

@NgModule({
  declarations: [AppComponent, EntityViewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
