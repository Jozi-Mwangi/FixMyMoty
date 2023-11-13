export type FooterContextProps = {
    isOpen:boolean,
    toggleMenu : ()=>void
}

export  interface ChildrenProps {
    children: React.ReactNode
  }

export interface FormDataProps {
    email : string,
    phoneNumber : string,
    userName : string,
    password : string,
    userType : string,
    selectedGender: string[]
}