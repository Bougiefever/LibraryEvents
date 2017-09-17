import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EventListComponent } from "./event/event-list/event-list.component";
import { EventDetailComponent } from "./event/event-detail/event-detail.component";
import { EventResolver } from "./shared/services/event-resolver";
import { InstructorListComponent } from "./instructor/instructor-list/instructor-list.component";
import { ScheduledEventListComponent } from "./scheduled-event/scheduled-event-list/scheduled-event-list.component";
import { InstructorDetailComponent } from "./instructor/instructor-detail/instructor-detail.component";
import { InstructorResolver } from "./shared/services/instructor-resolver";
import { InstructorEditComponent } from "./instructor/instructor-edit/instructor-edit.component";
import { InstructorNewComponent } from "./instructor/instructor-new/instructor-new.component";

export const routes: Route[] = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'events',
      component: EventListComponent
    },
    {
      path: 'events/:url',
      component: EventDetailComponent,
      resolve: {
        event: EventResolver
      }
    },
    {
      path: 'instructors',
      children: [
        {
          path: ':username',
          children: [
            {
              path: '',
              component: InstructorDetailComponent,
              resolve: {
                instructor: InstructorResolver
              }
            },
            {
              path: 'edit',
              component: InstructorEditComponent,
              resolve: {
                instructor: InstructorResolver
              }
            }
          ]
        },
        {
          path: '',
          component: InstructorListComponent
        }
      ]
    },
    {
      path: 'new-instructor',
      component: InstructorNewComponent
    },
    {
      path: 'scheduled-events',
      component: ScheduledEventListComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'events'
    }
  ];