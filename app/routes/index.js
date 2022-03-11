import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service session;
  @service router;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login-error');
    this.router.replaceWith('dashboard', {
      queryParams: {
        cohorts: null,
        courseFilters: null,
        courseLevels: null,
        courses: null,
        mySchedule: null,
        reportYear: null,
        sessionTypes: null,
        show: null,
        showFilters: null,
        terms: null,
        view: null,
      },
    });
  }
}
