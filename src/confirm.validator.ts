import { FormGroup } from "@angular/forms";

export function ConfirmedValidator (cn:string,mcn:string){
    return(formgroup:FormGroup)=>{
        const password=formgroup.controls[cn];
        const cpassword=formgroup.controls[mcn];
        if(password.value!==cpassword.value){
            cpassword.setErrors({ConfirmedValidator:true})
        }
        else{
            cpassword.setErrors(null);
        }
    }

}



