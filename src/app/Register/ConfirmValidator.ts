import { FormGroup } from "@angular/forms";

export function ConfirmValidator(controlname:string,matchingcontrolname:string) {
    return(formGroup:FormGroup)=>{
        const pwd=formGroup.controls[controlname];
        const cpwd=formGroup.controls[matchingcontrolname];
        if(pwd.value!==cpwd.value){
            cpwd.setErrors({ConfirmValidator:true});
        }
        else{
            cpwd.setErrors(null);
        }
    }
}
