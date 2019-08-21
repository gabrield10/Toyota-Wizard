import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


const routes: Routes = [
  {path:'',component: WelcomeComponent},
  {path: 'questions',component: QuestionsComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
