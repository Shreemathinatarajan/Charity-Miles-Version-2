import { FormGroup } from "@angular/forms";
export function Confirmpassword(controlName:string,matchingName:string) {
    return (formgroup:FormGroup)=>{
        const control=formgroup.controls[controlName];
        const matching=formgroup.controls[matchingName];
        if (
          matching.errors &&
          !matching.errors['Confirmpassword']
        ) {
          return;
        }
        if(control.value!==matching.value){
          matching.setErrors({Confirmpassword:true})
        }
        else{
          matching.setErrors(null)
        }
      }
}
