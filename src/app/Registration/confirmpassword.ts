import { FormGroup } from "@angular/forms";
export function Confirmpassword(controlName:string,matchingControlName:string){
  return (formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if(matchingControl.errors && !matchingControl.errors){
      return;
    }
    else if(control.value!==matchingControl.value){
      matchingControl.setErrors({Confirmpassword:true});
    }
    else{
      matchingControl.setErrors(null);
    }
  }
}