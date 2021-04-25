import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { UserComponent } from 'src/app/modules/user/user.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AdminComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
