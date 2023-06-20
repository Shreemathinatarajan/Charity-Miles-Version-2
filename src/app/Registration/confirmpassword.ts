import { FormGroup } from "@angular/forms";
export function Confirmpassword(controlName:string,matchingName:string) {
    return (formgroup:FormGroup)=>{
        const pass=formgroup.controls[controlName];
        const cpass=formgroup.controls[matchingName];
        if (pass.value! == cpass.value) {
          cpass.setErrors({Confirmpassword:true});
        }
        else{
          cpass.setErrors(null)
        }
      }
}
