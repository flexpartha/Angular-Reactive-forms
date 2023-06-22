import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReactFormService } from '../services/react-form.service';
import { Employee } from '../Employee/employe.model'
import { Team } from '../team/team';
@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {

  teamForm: FormGroup;
	isValidFormSubmitted = false;
	allSkills: Observable<any[]>;

  constructor(private fb:FormBuilder, private teamMngService:ReactFormService) { }

  ngOnInit(): void {
    this.allSkills = this.teamMngService.getSkills();

    this.teamForm = this.fb.group({
      teamName: ['', Validators.required],
      employees: this.fb.array([
        this.createemployeegroup()
        //this.fb.group(new Employee()),
        //this.fb.group(new Employee())
      ],[Validators.required, Validators.maxLength(5)]
      )
    });
  }

  createemployeegroup(){
    return this.fb.group({
      empId: ['', Validators.required],
      empName:['', Validators.required],
      skill: ['', Validators.required]
    })
  }
  get teamName() {
		return this.teamForm.get('teamName');
	}

  get employees():FormArray{
    return this.teamForm.get('employees') as FormArray;
  }
  addEmployee() {
		//let fg = this.fb.group(new Employee());
    let fg = this.createemployeegroup();
		this.employees.push(fg);
	}
  deleteEmployee(idx: number) {
		this.employees.removeAt(idx);
	}

  onFormSubmit() {
    this.isValidFormSubmitted = false;
    if (this.teamForm.invalid) {
      console.log("Form Value::-",this.teamForm);
			return;
		}
    this.isValidFormSubmitted = true;		
		let team: Team = this.teamForm.value;
		this.teamMngService.saveTeam(team);
		this.teamForm.reset();
  }
  patchEmployeeValues(){
    this.employees.patchValue([
      { empId: "111", empName: "Mohan"},
			{ empId: "112", skill: "Angular"}
    ])
  }
  setEmployeeValues(){
    this.employees.setValue([
      { empId: "111", empName: "Mohan", skill: "Java"},
			{ empId: "112", empName: "Krishna", skill: "Angular"}	
    ])
  }
  resetTeamForm(){
    this.teamForm.reset();
  }
}
