import { Pipe, PipeTransform } from "@angular/core";
import { Status, StatusToString } from "../models/leave-request.model";

@Pipe({
	name: "leaveRequestStatusToString",
	pure: true,
	standalone: false,
})
export class LeaveRequestStatusToStringPipe implements PipeTransform {
	transform(value: Status): string {
		return StatusToString(value);
	}
}
