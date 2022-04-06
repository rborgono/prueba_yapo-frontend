import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const tracksModule = () => import('./tracks/tracks.module').then(x => x.TracksModule);

const routes: Routes = [
    { path: 'tracks', loadChildren: tracksModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }