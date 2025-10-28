import { JsonValue } from "@prisma/client/runtime/library";

class ApiResponse{
    statusCode: number;
    data:any;
    message:string;

    constructor(
        statusCode: number ,
        data: string | { email: string; fullname: string; password: string; id: string; googleId: string | null; image: string | null; role: string | null; createdAt: Date; updatedAt: Date; } | { name: string; email: string; id: string; createdAt: Date; updatedAt: Date; gender: string; mobile_number: string; aadhaar_number: string; account_number: string; department: string; designation: string; previous_company: string; pf_number: string; salary: string; active: boolean; current_address: string; permanent_address: string; employeeDOBDate: Date; employeeJoiningDate: Date; employeeId: string; employeePassword: string; reportOffice: string | null; totalLeaves: number | null; sickLeaves: number | null; casualLeaves: number | null; vacationLeaves: number | null; } | { name: string; email: string; id: string; createdAt: Date; updatedAt: Date; gender: string; mobile_number: string; aadhaar_number: string; account_number: string; department: string; designation: string; previous_company: string; pf_number: string; salary: string; active: boolean; current_address: string; permanent_address: string; employeeDOBDate: Date; employeeJoiningDate: Date; employeeId: string; employeePassword: string; reportOffice: string | null; totalLeaves: number | null; sickLeaves: number | null; casualLeaves: number | null; vacationLeaves: number | null; }[] | { name: string; date: Date | null; email: string; id: string; createdAt: Date; updatedAt: Date; designation: string; employeeId: string; leaveDates: JsonValue | null; description: string; leave: number; requestStatus: string; isRequestApproved: boolean | null; leaveType: string; } | { name: string; date: Date | null; email: string; id: string; createdAt: Date; updatedAt: Date; designation: string; employeeId: string; leaveDates: JsonValue | null; description: string; leave: number; requestStatus: string; isRequestApproved: boolean | null; leaveType: string; }[] | { id: string; createdAt: Date; updatedAt: Date; title: string; message: string; type: string; userId: string; isRead: boolean; } | { id: string; createdAt: Date; updatedAt: Date; title: string; message: string; type: string; userId: string; isRead: boolean; }[] | null,
        message="Success"
    ){
      this.statusCode = statusCode;
      this.data = data;
      this.message = message
    }
}
export {ApiResponse}