import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Team } from '../team/team';

const ALL_SKILLS = [
	{name: 'Java', displayName: 'Java'},
	{name: 'Angular', displayName: 'Angular'},
	{name: 'Dot Net', displayName: 'Dot Net'}
 ];

@Injectable({
  providedIn: 'root'
})
export class ReactFormService {

  getSkills() {
		return of(ALL_SKILLS);
	}
  constructor() { }

  saveTeam(team: Team) {
    console.log('------------TEAM------------');
		console.log('Team Name: ' + team.teamName);
		console.log('----- Employee Details -----');

    for (let emp of team.employees) {
			console.log('Emp Id: ' + emp.empId);
			console.log('Emp Name: ' + emp.empName);
			console.log('Emp Skill: ' + emp.skill);
			console.log('-------------------');
		}
  }
}
