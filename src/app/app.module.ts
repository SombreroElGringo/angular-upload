import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FIREBASE_CONFIG } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropzoneDirective } from './directives/dropzone.directive';
import { UploaderComponent } from './components/uploader/uploader.component';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';




@NgModule({
  declarations: [
    AppComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
