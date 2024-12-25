import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  constructor(){
    // this.checkFind();
    // this.checkFilter();
    // this.coeckIndex();
    this.checkMap()
  }
  box = false;
  choose: string | null = null;
  select = ['SASI', 'PHANI', 'BHARGAV'];

  theDropdown() {
    this.box = !this.box;
  }

  applyOption(select: string) {
    this.choose = select;
    this.box = false; // Close dropdown after selection
  }

  students= [
    {name: 'sasi', age: 25, id: '123a'},
    {name: 'bhargav', age: 35, id: '123b'},
    {name: 'phani', age: 45, id: '123c'}
  ]


  checkMap() {
    let updatedStudents = this.students.map((student) => {
      if(student.age <= 25) {
        return {...student, status: 'j'}
      } else {
        return {...student, status: 'S'}
      }
      
    });

    console.log(updatedStudents)
  }


  coeckIndex() {
    let ind = this.students.findIndex((stu) => {
      console.log('indkljjklh');
      return stu.age == 35
    })

    console.log(ind);
    console.log(this.students[ind].name);
    
  }

  checkFilter(){
    let filteredStudents = this.students.filter(
      (details, a)=>{
        console.log(a);
        console.log(details);
        return details.age > 36
      // console.log(details) dont do it 
      
      }
      
  )
  console.log(filteredStudents);
  



  };

  checkFind(){
    let studentData = this.students.find(
      (student) => {
        // console.log('testing')
        return student.id === '123c'

      }
    )
    console.log(studentData);
    


  }
}